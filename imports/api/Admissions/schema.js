import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  patientId: {
    type: String,
    optional: false
  },
  careplan: {
    type: String,
    label: "careplan Id",
    optional: true
  },
  locationId: {
    type: String,
    optional: true
  },
  start: {
    type: Date,
    label: "Hospitalization Date/Time",
    optional: true
  },
  end: {
    type: Date,
    label: "Discharge Date/Time",
    optional: true
  },
  isReadmission: {
    type: Boolean,
    label: "Readmission?",
    optional: true
  },
  isActive: {
    type: Boolean
  },
  createdAt: {
    type: Date
  },
  createdBy: {
    type: String,
    optional: true
  },
  partOf: {
    type: String,
    label: "Part of careplan",
    optional: true
  },
  history: {
    type: Array,
    label: "Admission history",
    optional: true
  },
  "history.$": { type: Object },
  "history.$.updatedAt": {
    type: Date
  },
  "history.$.updatedBy": {
    type: String
  },
  "history.$.checkedIn": {
    type: Date
  },
  "history.$.checkedOut": {
    type: Date
  }
});
