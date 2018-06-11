import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import Patients from "./collection";
import rateLimit from "../../modules/rate-limit";

Meteor.methods({
  "patients.update": function patientsUpdate(patient) {
    console.log(patient);

    try {
      const patientId = patient._id;
      Patients.update(patientId, { $set: patient });
      return patientId;
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  },
  "patients.remove": function patientsRemove(patientId) {
    check(patientId, String);

    try {
      return Patients.remove(patientId);
    } catch (exception) {
      throw new Meteor.Error("500", exception);
    }
  }
});

rateLimit({
  methods: ["patients.insert", "patients.update", "patients.remove"],
  limit: 5,
  timeRange: 1000
});
