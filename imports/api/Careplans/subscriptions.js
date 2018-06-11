import pubSub from "../../modules/pubSub";

import {
  ICA_CREATED,
  PATIENT_CREATED,
  PATIENT_DELETED,
  PHYSICIAN_3_MONTH_FOLLOWUP_CREATED,
  PHYSICIAN_12_MONTH_FOLLOWUP_CREATED,
  PHYSICIAN_24_MONTH_FOLLOWUP_CREATED,
  PHYSICIAN_SURGICAL_CREATED
} from "../../Constants/PubSubTypes";
import Careplans from "./collection";
import Questionnaires from "../Questionnaires/collection";
import { PLANNED } from "../../Constants/Status";
import { pathwaySurgery, pathwayFollowup } from "../../Constants/pathwayStatus";

pubSub.on(
  PATIENT_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ newPatient }) => {
    console.log("On PATIENT_CREATED the first careplan is created!");
    return Careplans.insert({
      patientId: newPatient._id,
      name: `Careplan for ${newPatient.firstName}`,
      status: PLANNED,
      startDate: new Date(),
      createdAt: new Date(),
      createdBy: newPatient.createdBy,
      presidingPhysician: newPatient.createdBy,
      isActive: true
    });
  })
);

pubSub.on(
  PATIENT_DELETED,
  /* eslint-disable-next-line no-undef */
  (deletePatientCareplan = ({ _id }) => {
    console.log(
      `On PATIENT_DELETED the ${_id} patient\`s careplan is deleted!`
    );
    return Careplans.remove({ patientId: _id });
  })
);

pubSub.on(
  ICA_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ _id, treatmentType }) => {
    const questionnaire = Questionnaires.findOne({ formId: _id });
    const careplan = Careplans.findOne({ _id: questionnaire.careplanId });
    if (treatmentType === "SurgeryAndFollowUp") {
      let history = [];
      if (careplan.pathway && careplan.pathway.history) {
        careplan.pathway.history.push({
          value: pathwaySurgery.default,
          date: new Date()
        });
        history = careplan.pathway.history;
      } else {
        history = [
          {
            value: pathwaySurgery.default,
            date: new Date()
          }
        ];
      }
      Careplans.update(questionnaire.careplanId, {
        $set: {
          pathway: {
            type: "surgery",
            status: pathwaySurgery.default,
            history
          }
        }
      });
    } else if (treatmentType === "FollowUpRequiredOnly") {
      let history = [];
      if (careplan.pathway && careplan.pathway.history) {
        careplan.pathway.history.push({
          value: pathwayFollowup.default,
          date: new Date()
        });
        history = careplan.pathway.history;
      } else {
        history = [
          {
            value: pathwayFollowup.default,
            date: new Date()
          }
        ];
      }
      Careplans.update(questionnaire.careplanId, {
        $set: {
          pathway: {
            type: "surgery",
            status: pathwayFollowup.default,
            history
          }
        }
      });
    }
  })
);

pubSub.on(
  PHYSICIAN_3_MONTH_FOLLOWUP_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ _id }) => {
    const questionnaire = Questionnaires.findOne({ formId: _id });
    const careplan = Careplans.findOne({ _id: questionnaire.careplanId });
    let history = [];
    if (careplan.pathway && careplan.pathway.history) {
      careplan.pathway.history.push({
        value: pathwaySurgery.Physician3MonthFollowUp,
        date: new Date()
      });
      history = careplan.pathway.history;
    } else {
      history = [
        {
          value: pathwaySurgery.Physician3MonthFollowUp,
          date: new Date()
        }
      ];
    }
    Careplans.update(questionnaire.careplanId, {
      $set: {
        pathway: {
          type: "surgery",
          status: pathwaySurgery.Physician3MonthFollowUp,
          history
        }
      }
    });
  })
);

pubSub.on(
  PHYSICIAN_12_MONTH_FOLLOWUP_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ _id }) => {
    const questionnaire = Questionnaires.findOne({ formId: _id });
    const careplan = Careplans.findOne({ _id: questionnaire.careplanId });
    let history = [];
    if (careplan.pathway && careplan.pathway.history) {
      careplan.pathway.history.push({
        value: pathwaySurgery.Physician12MonthFollowup,
        date: new Date()
      });
      history = careplan.pathway.history;
    } else {
      history = [
        {
          value: pathwaySurgery.Physician12MonthFollowup,
          date: new Date()
        }
      ];
    }
    Careplans.update(questionnaire.careplanId, {
      $set: {
        pathway: {
          type: "surgery",
          status: pathwaySurgery.Physician12MonthFollowup,
          history
        }
      }
    });
  })
);

pubSub.on(
  PHYSICIAN_24_MONTH_FOLLOWUP_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ _id }) => {
    const questionnaire = Questionnaires.findOne({ formId: _id });
    const careplan = Careplans.findOne({ _id: questionnaire.careplanId });
    let history = [];
    if (careplan.pathway && careplan.pathway.history) {
      careplan.pathway.history.push({
        value: pathwaySurgery.Physician24MonthFollowup,
        date: new Date()
      });
      history = careplan.pathway.history;
    } else {
      history = [
        {
          value: pathwaySurgery.Physician24MonthFollowup,
          date: new Date()
        }
      ];
    }
    Careplans.update(questionnaire.careplanId, {
      $set: {
        pathway: {
          type: "surgery",
          status: pathwaySurgery.Physician24MonthFollowup,
          history
        }
      }
    });
  })
);

pubSub.on(
  PHYSICIAN_SURGICAL_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateCareplanPahWay = ({ _id }) => {
    const questionnaire = Questionnaires.findOne({ formId: _id });
    const careplan = Careplans.findOne({ _id: questionnaire.careplanId });
    let history = [];
    if (careplan.pathway && careplan.pathway.history) {
      careplan.pathway.history.push({
        value: pathwaySurgery.PhysicianSurgical,
        date: new Date()
      });
      history = careplan.pathway.history;
    } else {
      history = [
        {
          value: pathwaySurgery.PhysicianSurgical,
          date: new Date()
        }
      ];
    }
    Careplans.update(questionnaire.careplanId, {
      $set: {
        pathway: {
          type: "surgery",
          status: pathwaySurgery.PhysicianSurgical,
          history
        }
      }
    });
  })
);