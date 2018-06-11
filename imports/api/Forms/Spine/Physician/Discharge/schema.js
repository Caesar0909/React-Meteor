import SimpleSchema from "simpl-schema";

export default new SimpleSchema({
  DateDischarge: {
    type: Date,
    label: "Date of discharge",
    optional: true
  },

  DischargedTo: {
    type: String,
    label: "Patient discharged to",
    defaultValue: "1",
    optional: true
    // autoform: {
    //   type: "select",
    //   options: function() {
    //     return [
    //       { label: " Home - No supervision", value: "1" },
    //       {
    //         label: " Home - Supervised by a health care professional",
    //         value: "2"
    //       },
    //       { label: " In-patient rehabilitation", value: "3" },
    //       { label: " Short term convalescent care", value: "4" },
    //       { label: " Nursing home", value: "5" },
    //       { label: " Hospital-Hospital transfer", value: "6" },
    //       { label: " Death", value: "8" },
    //       { label: " Other ", value: "7" }
    //     ];
    //   }
    // }
  },
  AllogenicBloodProducts: {
    type: Boolean,
    label: "Did the patient receive allogenic (donor) blood products?",
    optional: true
  },
  DischargeAdverseEvent: {
    type: Boolean,
    label: "Did the patient experience any adverse events?",
    optional: true
  },
  AdmittedToICU: {
    type: Boolean,
    label: " Was the patient sent to the ICU?",
    optional: true
  },
  StepDownBed: {
    type: Boolean,
    label: " Did the patient require a step down bed?",
    optional: true
  },
  stay_length: {
    type: String,
    label:
      "How many days longer was the hospital stay extended due to the adverse event(s)?",
    optional: true
    // autoform: {
    //   type: "select",
    //   options: [
    //     {
    //       label: "None",
    //       value: "1"
    //     },
    //     {
    //       label: "1-2 days",
    //       value: "1-2 days"
    //     },
    //     {
    //       label: "3-7 days",
    //       value: "3-7 days"
    //     },
    //     {
    //       label: "8-14 days",
    //       value: "8-14 days"
    //     },
    //     {
    //       label: "15-28 days",
    //       value: "15-28 days"
    //     },
    //     {
    //       label: "28+ days",
    //       value: "28+ days"
    //     }
    //   ]
    // }
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
    //         label: "Airway",
    //         value: "Airway"
    //       },
    //       {
    //         label: "Cardiac arrest / failure / arrhythmia",
    //         value: "Cardiac arrest / failure / arrhythmia"
    //       },
    //       {
    //         label: "Cerebrovascular Event",
    //         value: "Cerebrovascular Event"
    //       },
    //       {
    //         label: "Cutaneous injury",
    //         value: "Cutaneous injury"
    //       },
    //       {
    //         label: "Delirium / altered mental status",
    //         value: "Delirium / altered mental status"
    //       },
    //       {
    //         label: "Dysphagia / dysphonia",
    //         value: "Dysphagia / dysphonia"
    //       },
    //       {
    //         label: "Fall",
    //         value: "Fall"
    //       },
    //       {
    //         label: "GI Bleeding",
    //         value: "GI Bleeding"
    //       },
    //       {
    //         label: "Hematoma",
    //         value: "Hematoma"
    //       },
    //       {
    //         label: "Ileus / bowel obstruction",
    //         value: "Ileus / bowel obstruction"
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
    //         label: "Pneumonia",
    //         value: "Pneumonia"
    //       },
    //       {
    //         label: "Renal insufficiency",
    //         value: "Renal insufficiency"
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
    //         value: "TWound dehiscence"
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
  }
});
