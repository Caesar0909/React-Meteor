import _ from "lodash";
import Physician24MonthFollowUps from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_24_MONTH_FOLLOWUP_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physician24MonthFollowUp(rootValue, args) {
      const physician24MonthFollowUp = Physician24MonthFollowUps.findOne({
        _id: args._id
      });
      return physician24MonthFollowUp || {};
    }
  },

  Mutation: {
    createPhysician24MonthFollowUp(obj, { physician24MonthFollowUp }) {
      let id = null;
      if (physician24MonthFollowUp._id) {
        const updatePhysician24MonthFollowUp = _.omit(
          physician24MonthFollowUp,
          ["__typename"]
        );
        id = physician24MonthFollowUp._id;
        Physician24MonthFollowUps.update(physician24MonthFollowUp._id, {
          $set: updatePhysician24MonthFollowUp
        });
        pubSub.emit(PHYSICIAN_24_MONTH_FOLLOWUP_CREATED, {
          _id: id,
          ...updatePhysician24MonthFollowUp
        });
      } else {
        const newPhysician24MonthFollowUp = Object.assign(
          {},
          {
            ...physician24MonthFollowUp,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = Physician24MonthFollowUps.insert(newPhysician24MonthFollowUp);
      }
      return Physician24MonthFollowUps.findOne(id);
    }
  }
};
