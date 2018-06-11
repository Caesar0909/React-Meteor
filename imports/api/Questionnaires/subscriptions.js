import moment from "moment";

import pubSub from "../../modules/pubSub";
import {
  PATIENT_CREATED,
  ICA_CREATED,
  PATIENT_DELETED
} from "../../Constants/PubSubTypes";
import Questionnaires from "./collection";
import { INITIAL_CLINICAL_ASSESSMENT } from "../../Constants/Forms";
import { PLANNED, NOT_STARTED } from "../../Constants/Status";
import Careplans from "../Careplans/collection";
import spineForms from "../Utility/surgeryForms.json";

pubSub.on(
  PATIENT_CREATED,
  /* eslint-disable-next-line no-undef */
  (newQuestionnaire = ({ newPatient }) => {
    const careplan = Careplans.findOne({ patientId: newPatient._id });
    console.log(
      `Patient ${
        newPatient._id
      } creating the questionnaire type ICA for the careplan ${careplan._id}`
    );
    Questionnaires.insert({
      isActive: true,
      type: INITIAL_CLINICAL_ASSESSMENT,
      careplanId: careplan._id,
      owner: newPatient.createdBy,
      assignedTo: newPatient.createdBy,
      patientId: newPatient._id,
      createdAt: new Date(),
      dueDate: new Date(
        moment()
          .endOf("day")
          .format()
      ),
      name: INITIAL_CLINICAL_ASSESSMENT.replace(/([A-Z])/g, " $1").replace(
        /^./,
        str => str.toUpperCase()
      ),
      status: PLANNED
    });
  })
);

pubSub.on(
  PATIENT_DELETED,
  /* eslint-disable-next-line no-undef */
  (deletePatientQuestionnaires = ({ _id }) => {
    console.log(
      `On PATIENT_DELETED the ${_id} patient\`s questionnaires is deleted!`
    );
    return Questionnaires.remove({ patientId: _id }); // TODO: refactor to patientId
  })
);

pubSub.on(
  ICA_CREATED,
  /* eslint-disable-next-line no-undef */
  (newSurgeryForms = ({ _id, treatmentOption, treatmentType }) => {
    if (treatmentOption) {
      const questionnaire = Questionnaires.findOne({ formId: _id });
      console.log(
        `ICA creating the questionnaire type ICA for the careplan ${
          questionnaire._id
        }`
      );
      questionnaire.createdAt = new Date();
      questionnaire.dueDate = new Date(
        moment()
          .endOf("day")
          .format()
      );
      delete questionnaire._id;
      delete questionnaire.formId;
      spineForms.map(({ name, treatmentTypes }) => {
        if (treatmentTypes.includes(treatmentType)) {
          questionnaire.type = name;
          questionnaire.name = name
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, str => str.toUpperCase());
          questionnaire.status = NOT_STARTED;
          const newQuestionnaire = Object.assign({}, questionnaire);
          console.log(
            `pubSub ${ICA_CREATED} ${JSON.stringify(questionnaire, null, 2)}`
          );
          if (
            !Questionnaires.findOne({
              type: questionnaire.type,
              careplanId: questionnaire.careplanId
            })
          ) {
            Questionnaires.insert(newQuestionnaire);
          }
        }
      });
    }
  })
);
