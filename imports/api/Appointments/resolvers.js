import Appointment from "./collection";
import Patient from "../Patients/collection";
// import Location from "../Locations/collection";
import { SCHEDULED, CANCELLED } from "../../Constants/AppointmentStatus";
import { ITEMS_PER_PAGE } from "../../Constants/Pagination";

export default {
  Query: {
    appointments(rootValue, args) {
      const { filter, limit, skip } = args;
      const query = {};
      if (filter) {
        query.status = filter.status;
      }

      return Appointment.find(query, {
        limit: ITEMS_PER_PAGE,
        skip: 0,
        sort: {
          start: -1
        }
      }).fetch();
    },
    appointment(rootValue, { _id }) {
      if (!_id) return null;

      const appointment = Appointment.findOne({
        _id
      });
      return appointment;
    }
  },
  Appointment: {
    patient: appointment => {
      const patient = Patient.findOne({ _id: appointment.patientId });
      return patient;
    }
    // location: appointment => {
    //   Location.findOne(appointment.locationId);
    // }
  },
  Mutation: {
    createAppointment(rootValue, { appointment }) {
      const newAppointment = Object.assign(appointment, {
        createdAt: new Date(),
        start: new Date(),
        status: SCHEDULED
      });

      const newId = Appointment.insert(newAppointment);

      return Appointment.findOne(newId);
    },
    cancelAppointment(rootValue, { appointment }) {
      const newAppointment = Object.assign(appointment, {
        status: CANCELLED
      });

      Appointment.update(
        { _id: appointment._id },
        {
          $set: newAppointment
        }
      );
    }
  }
};
