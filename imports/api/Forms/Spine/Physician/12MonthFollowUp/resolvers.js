import _ from "lodash";
import Physician12MonthFollowUps from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_12_MONTH_FOLLOWUP_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physician12MonthFollowUp(rootValue, args) {
      const physician12MonthFollowUp = Physician12MonthFollowUps.findOne({
        _id: args._id
      });
      return physician12MonthFollowUp || {};
    }
  },

  Mutation: {
    createPhysician12MonthFollowUp(obj, { physician12MonthFollowUp }) {
      let id = null;
      if (physician12MonthFollowUp._id) {
        const updatePhysician12MonthFollowUp = _.omit(
          physician12MonthFollowUp,
          ["__typename"]
        );
        id = physician12MonthFollowUp._id;
        Physician12MonthFollowUps.update(physician12MonthFollowUp._id, {
          $set: updatePhysician12MonthFollowUp
        });
        pubSub.emit(PHYSICIAN_12_MONTH_FOLLOWUP_CREATED, {
          _id: id,
          ...updatePhysician12MonthFollowUp
        });
      } else {
        const newPhysician12MonthFollowUp = Object.assign(
          {},
          {
            ...physician12MonthFollowUp,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = Physician12MonthFollowUps.insert(newPhysician12MonthFollowUp);
      }
      return Physician12MonthFollowUps.findOne(id);
    }
  }
};
