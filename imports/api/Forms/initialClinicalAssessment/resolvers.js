import InitialClinicalAssessments from "./collection";
import pubSub from "../../../modules/pubSub";
import { ICA_CREATED } from "../../../Constants/PubSubTypes";

export default {
  Query: {
    initialClinicalAssessment(rootValue, args) {
      const ica = InitialClinicalAssessments.findOne({ _id: args._id });
      return ica || {};
    }
  },

  Mutation: {
    createInitialClinicalAssessment(obj, { initialClinicalAssessment }) {
      let ICAId = null;
      if (initialClinicalAssessment._id) {
        const updateInitialClinicalAssessment = Object.assign(
          {},
          initialClinicalAssessment
        );
        ICAId = initialClinicalAssessment._id;
        if (!updateInitialClinicalAssessment.CA1B) {
          updateInitialClinicalAssessment.CA1B = [];
        }
        InitialClinicalAssessments.update(initialClinicalAssessment._id, {
          $set: updateInitialClinicalAssessment
        });
        pubSub.emit(ICA_CREATED, {
          _id: ICAId,
          ...updateInitialClinicalAssessment
        });
      } else {
        const newInitialClinicalAssessment = Object.assign(
          {},
          {
            ...initialClinicalAssessment,
            createdAt: new Date(),
            start: new Date()
          }
        );
        if (!newInitialClinicalAssessment.CA1B) {
          newInitialClinicalAssessment.CA1B = [];
        }
        if (!newInitialClinicalAssessment.PS1) {
          newInitialClinicalAssessment.PS1 = [];
        }
        if (!newInitialClinicalAssessment.PS4) {
          newInitialClinicalAssessment.PS4 = [];
        }
        ICAId = InitialClinicalAssessments.insert(newInitialClinicalAssessment);
      }
      return InitialClinicalAssessments.findOne(ICAId);
    }
  }
};
