import _ from "lodash";
import PhysicianPre12WkAEs from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_PRE_12_WEEK_AE_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physicianPre12WkAE(rootValue, args) {
      const physicianPre12WkAE = PhysicianPre12WkAEs.findOne({
        _id: args._id
      });
      return physicianPre12WkAE || {};
    }
  },

  Mutation: {
    createPhysicianPre12WkAE(obj, { physicianPre12WkAE }) {
      let id = null;
      if (physicianPre12WkAE._id) {
        const updatePhysicianPre12WkAE = _.omit(physicianPre12WkAE, [
          "__typename"
        ]);
        id = physicianPre12WkAE._id;
        PhysicianPre12WkAEs.update(physicianPre12WkAE._id, {
          $set: updatePhysicianPre12WkAE
        });
        pubSub.emit(PHYSICIAN_PRE_12_WEEK_AE_CREATED, {
          _id: id,
          ...updatePhysicianPre12WkAE
        });
      } else {
        const newPhysicianPre12WkAE = Object.assign(
          {},
          {
            ...physicianPre12WkAE,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = PhysicianPre12WkAEs.insert(newPhysicianPre12WkAE);
      }
      return PhysicianPre12WkAEs.findOne(id);
    }
  }
};
