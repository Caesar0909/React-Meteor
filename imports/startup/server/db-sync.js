import { MongoInternals } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import moment from "moment";

/**
 * Synchronise between two database.
 * Empty the main database and replace it content
 * with data from the secondary databse.
 *
 * @param {object} mainDatabase - the database which get errased as node mongo database object
 * @param {object} secondaryDatabase - the database from which to copy content as node mongo database object
 */
function synchroniseDbs(mainDatabase, secondaryDatabase) {
  //get all collection names from the remote database;
  secondaryDatabase.listCollections().toArray(function(error, collectionsList) {
    if (error) {
      throw error;
    }

    collectionsList.forEach(({ name }) => {
      //there is a collection called "system.indexes" which we should ignore
      if (name == "system.indexes") {
        return;
      }

      secondaryDatabase
        .collection(name)
        .find({})
        .toArray()
        .then(documents => {
          //empty the collection on the primary db
          const primaryCollection = mainDatabase.collection(name);
          primaryCollection
            .remove({})
            .then(() => {
              const bulk = primaryCollection.initializeUnorderedBulkOp();

              documents.forEach(document => {
                bulk.insert(document);
              });
              if (bulk.s.currentInsertBatch) {
                bulk.execute().catch(exception => {
                  console.error(
                    "error while inserting data to " + name + " collection"
                  );
                  console.error(exception);
                });
              }
            })
            .catch(exception => {
              console.error("error while emptying " + name + " collection");
              console.error(exception);
            });
        });
    });
  });
}

try {
  if (
    Meteor.settings.private &&
    Meteor.settings.private.synchroniseDB &&
    process.env.NODE_ENV != "production"
  ) {
    let tempArray = process.env.MONGO_URL.split("@");

    if (tempArray.length == 1) {
      tempArray = process.env.MONGO_URL.split("//");
    }

    let hosts = tempArray[1]
      .split("/")[0]
      .split(",")
      .map(hostAndPort => {
        return hostAndPort.split(":")[0];
      });

    let sameDb = false;
    for (let i = 0; i < hosts.length; ++i) {
      if (Meteor.settings.private.synchroniseDB.indexOf(hosts) != -1) {
        sameDb = true;
        console.error("Can not synchronize data between the same database");
        break;
      }
    }

    if (!sameDb) {
      //we will synchronise the main database with the secondary database
      //we will empty the main database and replace it content
      //with data from the secondary databse

      const secondaryDatabase = new Mongo.Collection("dummyCollection", {
        _driver: new MongoInternals.RemoteCollectionDriver(
          Meteor.settings.private.synchroniseDB
        ),
        defineMutationMethods: false
      }).rawDatabase();

      const mainDatabase = new Mongo.Collection(
        "dummyCollection"
      ).rawDatabase();

      const timeUntillEndOfWeek = moment()
        .endOf("week")
        .diff(moment());

      Meteor.setTimeout(() => {
        synchroniseDbs(mainDatabase, secondaryDatabase);
        Meteor.setInterval(() => {
          synchroniseDbs(mainDatabase, secondaryDatabase);
        }, 604800000);
      }, timeUntillEndOfWeek);
    }
  }
} catch (exception) {
  console.error("Something went wrong while synchronising dbs");
  console.error(exception);
}
