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
  "adverse_event.$": {
    type: Object,
    optional: true
  },
  "adverse_event.$.type": {
    type: String,
    label: "Select the type of adverse event",
    optional: true
    // autoform: {
    //   type: "select",
    //   options: function() {
    //     return [
    //       {
    //         label: "Implant / Instrumentation related ",
    //         value: "Implant / Instrumentation related"
    //       },
    //       {
    //         label: "Infection: Superficial wound",
    //         value: "Infection: Superficial wound"
    //       },
    //       {
    //         label: "Infection: Deep wound",
    //         value: "Infection: Deep wound"
    //       },
    //       {
    //         label: "Non-union (pseudoarthrosis)",
    //         value: "Non-union (pseudoarthrosis)"
    //       },
    //       {
    //         label: "Other (please specify)",
    //         value: "Other"
    //       }
    //     ];
    //   }
    // }
  },
  "adverse_event.$.grade": {
    type: String,
    label: "Grade",
    optional: true
    // autoform: {
    //   options: function() {
    //     return [
    //       {
    //         label: "Grade 1",
    //         value: "Grade 1"
    //       },
    //       {
    //         label: "Grade 2",
    //         value: "Grade 2"
    //       },
    //       {
    //         label: "Grade 3",
    //         value: "Grade 3"
    //       },
    //       {
    //         label: "Grade 4",
    //         value: "Grade 4"
    //       },
    //       {
    //         label: "Grade 5",
    //         value: "Grade 5"
    //       },
    //       {
    //         label: "Grade 6",
    //         value: "Grade 6"
    //       }
    //     ];
    //   }
    // }
  },
  "adverse_event.$.date": {
    type: Date,
    label: "Date of recognition",
    optional: true
  },
  "adverse_event.other.details": {
    type: String,
    label: "Please specify",
    optional: true
  }
});
