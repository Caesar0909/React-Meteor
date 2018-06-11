import _ from "lodash";
import PhysicianGeneralAssessments from "./collection";
import pubSub from "../../../../../modules/pubSub";
import { PHYSICIAN_GENERAL_CREATED } from "../../../../../Constants/PubSubTypes";

export default {
  Query: {
    physicianGeneralAssessment(rootValue, args) {
      const physicianGeneralAssessment = PhysicianGeneralAssessments.findOne({
        _id: args._id
      });
      return physicianGeneralAssessment || {};
    }
  },

  Mutation: {
    createPhysicianGeneralAssessment(obj, { physicianGeneralAssessment }) {
      let id = null;
      if (physicianGeneralAssessment._id) {
        const updatePhysicianGeneralAssessment = _.omit(
          physicianGeneralAssessment,
          ["__typename"]
        );
        id = physicianGeneralAssessment._id;
        PhysicianGeneralAssessments.update(physicianGeneralAssessment._id, {
          $set: updatePhysicianGeneralAssessment
        });
        pubSub.emit(PHYSICIAN_GENERAL_CREATED, {
          _id: id,
          ...updatePhysicianGeneralAssessment
        });
      } else {
        const newPhysicianGeneralAssessment = Object.assign(
          {},
          {
            ...physicianGeneralAssessment,
            createdAt: new Date(),
            start: new Date()
          }
        );
        id = PhysicianGeneralAssessments.insert(newPhysicianGeneralAssessment);
      }

      return PhysicianGeneralAssessments.findOne(id);
    }
  }
};
