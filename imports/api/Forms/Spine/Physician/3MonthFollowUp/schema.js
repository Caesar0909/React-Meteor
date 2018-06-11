import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  DiagnosisChanged: {
    type: Boolean,
    label: "Has the diagnosis changed since the last visit?",
    optional: true
  },
  TreatmentChanged: {
    type: Boolean,
    label: "Has the recommended treatment changed since the last visit?",
    optional: true
  },
  AdverseEventPostDischarge: {
    type: Boolean,
    label: "Has the patient experienced an adverse event since the last visit?",
    optional: true
  },
  adverse_event: {
    type: Array,
    defaultValue: [],
    optional: true
  },
  "adverse_event.$": {
    type: Object,
    optional: true
  },
  "adverse_event.$.type": {
    type: String,
    label: "Select the type of adverse event",
    optional: true
  },
  "adverse_event.$.grade": {
    type: String,
    label: "Grade",
    optional: true
  },
  "adverse_event.$.date": {
    type: Date,
    label: "Date of recognition",
    optional: true
  },
  "adverse_event.$.other": {
    type: Object,
    optional: true
  },
  "adverse_event.$.other.details": {
    type: String,
    label: "Please specify",
    optional: true
  }
});
