import Admissions from "./collection";
import Patient from "../Patients/collection";
import Locations from "../Locations/collection";
import pubSub from "../../modules/pubSub";
import { ADMISSION_CREATED } from "../../Constants/PubSubTypes";

export default {
  Query: {
    admissions(rootValue, { filter }) {
      const query = { isActive: true };
      if (filter) {
        query.patient.firstName = { $regex: filter };
      }
      return Admissions.find(query).fetch();
    },
    admission(rootValue, { _id }) {
      return Admissions.findOne({ _id });
    }
  },

  Admission: {
    patient: admission => Patient.findOne(admission.patientId),
    location: admission => Locations.findOne(admission.locationId)
  },

  Mutation: {
    createAdmission(obj, { admission }) {
      let admissionId = null;
      if (admission._id) {
        admissionId = admission._id;
        Admissions.update(admissionId, { $set: admission });
      } else {
        const appointmentId = admission.appointmentId;
        delete admission.appointmentId;

        const newAdmission = Object.assign(admission, {
          createdAt: new Date(),
          start: new Date()
        });
        admissionId = Admissions.insert(newAdmission);

        pubSub.emit(ADMISSION_CREATED, {
          appointmentId
        });
      }
      return Admissions.findOne(admissionId);
    },
    dischargeAdmission(rootValue, { admission }) {
      const admissionId = admission._id;
      const p = Object.assign(admission, { isActive: !admission.isActive });

      Admissions.update(admissionId, { $set: p });
      const updatedAdmission = Admissions.findOne(admissionId);

      return updatedAdmission;
    }
  }
};
