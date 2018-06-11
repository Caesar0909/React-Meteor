import Patients from "./collection";
import Admissions from "../Admissions/collection";
import Careplans from "../Careplans/collection";
import {
  PATIENT_CREATED,
  PATIENT_CREATED_QUESTIONNAIRE,
  PATIENT_DELETED
} from "../../Constants/PubSubTypes";
import pubSub from "../../modules/pubSub";

const ITEMS_PER_PAGE = 10;

export default {
  Query: {
    patients(rootValue, args) {
      const { filter, limit, skip } = args;

      const query = {};
      if (filter) {
        query.firstName = { $regex: filter };
      }

      return Patients.find(query, {
        limit: ITEMS_PER_PAGE,
        skip: 0
        // sort: 'firstName'
      }).fetch();
    },
    patient(rootValue, { _id }) {
      return Patients.findOne({ _id });
    },
    patientsNotAdmitted() {
      return Patients.aggregate([
        {
          $lookup: {
            from: "admissions",
            localField: "_id",
            foreignField: "patientId",
            as: "admission"
          }
        },
        {
          $match: {
            "admission.isActive": { $ne: true },
            isActive: true
          }
        }
      ]);
    }
  },
  Mutation: {
    createPatient(rootValue, { patient }) {
      let patientId = null;
      const newPatient = Object.assign(patient, { createdAt: new Date() });
      if (newPatient._id) {
        patientId = newPatient._id;
        Patients.update(patientId, { $set: newPatient });
      } else {
        newPatient._id = Patients.insert(newPatient);

        pubSub.emit(PATIENT_CREATED, { newPatient });
      }
      return Patients.findOne(newPatient._id);
    },

    archiveUnarchive(rootValue, { patient }) {
      const patientId = patient._id;
      const patientUpdated = Object.assign(patient, {
        isActive: !patient.isActive
      });

      Patients.update(patientId, { $set: patientUpdated });
      const updatedPatient = Patients.findOne(patientId);

      return updatedPatient;
    },

    deletePatient(rootValue, { _id }) {
      Patients.remove(_id);
      pubSub.emit(PATIENT_DELETED, { _id });
    }
  }
};
