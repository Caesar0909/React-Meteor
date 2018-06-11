import Careplans from "./collection";
import Patient from "../Patients/collection";
import Questionnaires from "../Questionnaires/collection";

const ITEMS_PER_PAGE = 10;

export default {
  Query: {
    careplan(rootValue, { _id }) {
      return Careplans.findOne(_id);
    },
    careplansByPatient(rootValue, { patientId }) {
      return Careplans.find({ patientId }).fetch();
    },
    careplansFiltered(rootValue, args) {
      const { patientId } = args;

      const query = {};
      if (patientId) {
        query.patientId = patientId;
      }

      return Careplans.find(query, {
        limit: ITEMS_PER_PAGE,
        skip: 0
      }).fetch();
    }
  },
  Careplan: {
    patient: careplan => Patient.findOne(careplan.patientId),
    questionnaires: careplan =>
      Questionnaires.find({ careplanId: careplan._id }).fetch()
  }
};
