import _ from "lodash";
import Physician3MonthFollowUps from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_3_MONTH_FOLLOWUP_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physician3MonthFollowUp(rootValue, args) {
      const physician3MonthFollowUp = Physician3MonthFollowUps.findOne({
        _id: args._id
      });
      return physician3MonthFollowUp || {};
    }
  },

  Mutation: {
    createPhysician3MonthFollowUp(obj, { physician3MonthFollowUp }) {
      let id = null;
      if (physician3MonthFollowUp._id) {
        const updatePhysician3MonthFollowUp = _.omit(physician3MonthFollowUp, [
          "__typename"
        ]);
        id = physician3MonthFollowUp._id;
        Physician3MonthFollowUps.update(physician3MonthFollowUp._id, {
          $set: updatePhysician3MonthFollowUp
        });
        pubSub.emit(PHYSICIAN_3_MONTH_FOLLOWUP_CREATED, {
          _id: id,
          ...updatePhysician3MonthFollowUp
        });
      } else {
        const newPhysician3MonthFollowUp = Object.assign(
          {},
          {
            ...physician3MonthFollowUp,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = Physician3MonthFollowUps.insert(newPhysician3MonthFollowUp);
      }

      return Physician3MonthFollowUps.findOne(id);
    }
  }
};
