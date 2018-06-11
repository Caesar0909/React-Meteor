import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  DateOfFollowUp: {
    type: Date,
    label: "Followup date",
    optional: true
  },
  ae12wk_ae: {
    type: Boolean,
    label: "Has the patient had a new Adverse Event?",
    defaultValue: false,
    optional: true
  },
  adverse_event: {
    type: Array,
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
    //         label: "Cerebrovascular Event",
    //         value: "Cerebrovascular Event"
    //       },
    //       {
    //         label: "Dysphagia / dysphonia",
    //         value: "Dysphagia / dysphonia"
    //       },
    //       {
    //         label: "Hematoma",
    //         value: "Hematoma"
    //       },
    //       {
    //         label: "Implant / Instrument related",
    //         value: "Implant / Instrument related"
    //       },
    //       {
    //         label: "Revision",
    //         value: "Revision"
    //       },
    //       {
    //         label: "Infection: Superficial wound",
    //         value: "Infection: Superficial wound"
    //       },
    //       {
    //         label: "Infection: Urinary tract",
    //         value: "Infection: Urinary tract"
    //       },
    //       {
    //         label: "Infection: Deep wound",
    //         value: "Infection: Deep wound"
    //       },
    //       {
    //         label: "Infection: Systemic",
    //         value: "Infection: Systemic"
    //       },
    //       {
    //         label: "Myocardial Infarction",
    //         value: "Myocardial Infarction"
    //       },
    //       {
    //         label: "Neurologic deterioration: Cord > motor grade in ASIA scale",
    //         value: "Neurologic deterioration: Cord > motor grade in ASIA scale"
    //       },
    //       {
    //         label: "Neurologic deterioration: Nerve root > 1MRC grade",
    //         value: "Neurologic deterioration: Nerve root > 1MRC grade"
    //       },
    //       {
    //         label: "Neurologic deterioration: Cauda equina syndrome",
    //         value: "Neurologic deterioration: Cauda equina syndrome"
    //       },
    //       {
    //         label: "Non-union",
    //         value: "Non-union"
    //       },
    //       {
    //         label: "Pain: New Onset",
    //         value: "Pain: New Onset"
    //       },
    //       {
    //         label: "Thromboembolic Event: DVT",
    //         value: "Thromboembolic Event: DVT"
    //       },
    //       {
    //         label: "Thromboembolic Event: Pulmonary embolism",
    //         value: "Thromboembolic Event: Pulmonary embolism"
    //       },
    //       {
    //         label: "Urinary",
    //         value: "Urinary"
    //       },
    //       {
    //         label: "Wound dehiscence",
    //         value: "Wound dehiscence"
    //       },
    //       {
    //         label: "Wound drainage: CSF",
    //         value: "Wound drainage: CSF"
    //       },
    //       {
    //         label: "Wound drainage: Serious",
    //         value: "Wound drainage: Serious"
    //       },
    //       {
    //         label: "Other",
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
