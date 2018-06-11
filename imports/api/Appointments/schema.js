import SimpleSchema from "simpl-schema";
import moment from "moment";

export default new SimpleSchema({
  appointmentType: {
    type: String,
    defaultValue: "Visit",
    optional: true
  },
  status: {
    type: String,
    optional: true
  },
  start: {
    type: Date,
    defaultValue: moment().format("YYYY-MM-DDTHH:mm")
  },
  end: {
    type: Date
  },
  timezone: {
    type: String,
    defaultValue: "MST",
    optional: true // TODO remove after testes
  },
  comment: {
    type: String,
    optional: true,
    min: 3,
    max: 100
  },
  referralId: {
    type: String,
    optional: true
  },
  careplanId: {
    type: String,
    optional: true
  },
  patientId: {
    type: String,
    optional: false
  },
  subject: {
    type: String,
    optional: true // TODO remove after testes
  },
  participants: {
    type: Array,
    defaultValue: [],
    optional: false
  },
  "participants.$": {
    type: String
  },
  cancelReason: {
    type: String, //allowedValues: ['patient did not show up', 'patient cancelled', 'appointment rescheduled', 'other'],
    optional: true
  },
  locationId: {
    type: String,
    optional: false
  },
  encounterType: {
    type: String,
    optional: true
  },
  encounterSubtypeId: {
    type: String,
    optional: true
  }
});
