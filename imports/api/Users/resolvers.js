import { Meteor } from "meteor/meteor";

export default {
  Query: {
    physicians() {
      return Meteor.users.find().fetch();
    }
  }
};
