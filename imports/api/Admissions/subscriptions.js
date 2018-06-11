import pubSub from "../../modules/pubSub";

import { PATIENT_DELETED } from "../../Constants/PubSubTypes";
import Admissions from "./collection";

pubSub.on(
  PATIENT_DELETED,
  /* eslint-disable-next-line no-undef */
  (deletePatientAdmissions = ({ _id }) => {
    console.log(
      `On PATIENT_DELETED the ${_id} patient\`s admissions is deleted!`
    );
    return Admissions.remove({ patientId: _id });
  })
);
