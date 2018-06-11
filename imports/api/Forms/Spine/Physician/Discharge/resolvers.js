import _ from "lodash";
import PhysicianDischarges from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_DISCHARGE_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physicianDischarge(rootValue, args) {
      const physicianDischarge = PhysicianDischarges.findOne({
        _id: args._id
      });
      return physicianDischarge || {};
    }
  },

  Mutation: {
    createPhysicianDischarge(obj, { physicianDischarge }) {
      let id = null;
      if (physicianDischarge._id) {
        const updatePhysicianDischarge = _.omit(physicianDischarge, [
          "__typename"
        ]);
        id = physicianDischarge._id;
        PhysicianDischarges.update(physicianDischarge._id, {
          $set: updatePhysicianDischarge
        });
        pubSub.emit(PHYSICIAN_DISCHARGE_CREATED, {
          _id: id,
          ...updatePhysicianDischarge
        });
      } else {
        const newPhysicianDischarge = Object.assign(
          {},
          {
            ...physicianDischarge,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = PhysicianDischarges.insert(newPhysicianDischarge);
      }
      return PhysicianDischarges.findOne(id);
    }
  }
};
