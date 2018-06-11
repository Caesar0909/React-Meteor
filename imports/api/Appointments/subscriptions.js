import pubSub from "../../modules/pubSub";

import { ADMISSION_CREATED } from "../../Constants/PubSubTypes";
import Appointment from "./collection";
import { COMPLETED } from "../../Constants/AppointmentStatus";

pubSub.on(
  ADMISSION_CREATED,
  /* eslint-disable-next-line no-undef */
  (updateAppointmentStatus = ({ appointmentId }) => {
    console.log("On ADMISSION_CREATED update appointment status to COMPLETED!");

    Appointment.update(
      { _id: appointmentId },
      {
        $set: { status: COMPLETED }
      }
    );
  })
);
