import _ from "lodash";
import PhysicianSurgicals from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_SURGICAL_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physicianSurgical(rootValue, args) {
      const physicianSurgical = PhysicianSurgicals.findOne({
        _id: args._id
      });
      return physicianSurgical || {};
    }
  },

  Mutation: {
    createPhysicianSurgical(obj, { physicianSurgical }) {
      let id = null;
      if (physicianSurgical._id) {
        const updatePhysicianSurgical = _.omit(physicianSurgical, [
          "__typename"
        ]);
        id = physicianSurgical._id;
        PhysicianSurgicals.update(physicianSurgical._id, {
          $set: updatePhysicianSurgical
        });
        pubSub.emit(PHYSICIAN_SURGICAL_CREATED, {
          _id: id,
          ...updatePhysicianSurgical
        });
      } else {
        const newPhysicianSurgical = Object.assign(
          {},
          {
            ...physicianSurgical,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = PhysicianSurgicals.insert(newPhysicianSurgical);
      }
      return PhysicianSurgicals.findOne(id);
    }
  }
};
