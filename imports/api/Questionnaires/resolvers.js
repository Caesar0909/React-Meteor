import Questionnaires from "./collection";
import Patient from "../Patients/collection";
import Careplans from "../Careplans/collection";
import InitialClinicalAssessment from "../Forms/initialClinicalAssessment/collection";

export default {
  Query: {
    questionnaires() {
      return Questionnaires.find({}).fetch();
    },
    questionnaire(rootValue, args) {
      let ret = Questionnaires.findOne({ _id: args._id });
      if (ret) {
        let initial = Questionnaires.findOne(
          { careplanId: ret.careplanId, type: "InitialClinicalAssessment" },
          { fields: { formId: 1 } }
        );
        if ((initial, initial.formId)) {
          let form = InitialClinicalAssessment.findOne(
            { _id: initial.formId },
            {
              fields: {
                PP1: 1,
                spineUpperClinical: 1,
                spineLowerClinical: 1,
                CA3: 1,
                treatmentType: 1
              }
            }
          );
          if (form) {
            ret.initialInfo = {
              PP1: form.PP1,
              spineUpperClinical: form.spineUpperClinical,
              spineLowerClinical: form.spineLowerClinical,
              CA3: form.CA3,
              treatmentType: form.treatmentType
            };
          }
        }
      }
      return ret;
    },
    questionnairesDueToday() {
      return Questionnaires.find({ dueDate: { $gte: new Date() } }).fetch();
    },
    questionnairesOverDue() {
      return Questionnaires.find({ dueDate: { $lt: new Date() } }).fetch();
    }
  },

  Questionnaire: {
    patient: questionnaire => Patient.findOne(questionnaire.patientId),
    careplan: questionnaire => Careplans.findOne(questionnaire.careplanId)
  },
  Mutation: {
    createQuestionnaire(obj, { questionnaire }) {
      Questionnaires.insert(questionnaire);
    },
    updateQuestionnaire(obj, { questionnaire }) {
      delete questionnaire.initialInfo;
      Questionnaires.update(questionnaire._id, { $set: questionnaire });
    }
  }
};
