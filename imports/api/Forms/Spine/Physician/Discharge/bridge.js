import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../../../../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  DateDischarge: {
    label: "Date of Discharge"
  },
  DischargedTo: {
    label: "Patient discharged to",
    options: [
      {
        label: "Home - No supervision",
        value: "1"
      },
      {
        label: "Home - Supervised by a health care professional",
        value: "2"
      },
      {
        label: "In-patient rehabilitation",
        value: "3"
      },
      {
        label: "Short term convalescent care",
        value: "4"
      },
      {
        label: "Nursing home",
        value: "5"
      },
      {
        label: "Hospital-Hospital transfer",
        value: "6"
      },
      {
        label: "Death",
        value: "8"
      },
      {
        label: "Other ",
        value: "7"
      }
    ]
  },

  AllogenicBloodProducts: {
    label: "Did the patient receive allogenic (donor) blood products?"
  },
  DischargeAdverseEvent: {
    label: "Did the patient experience any adverse event?"
  },
  AdmittedToICU: {
    label: "Was the patient sent to the ICU"
  },
  StepDownBed: {
    label: "Did the patient require a step down bed?"
  },
  stay_length: {
    label: "How many days longer was the hospital stay extended?",
    options: [
      {
        label: "None",
        value: "1"
      },
      {
        label: "1-2 days",
        value: "1-2 days"
      },
      {
        label: "3-7 days",
        value: "3-7 days"
      },
      {
        label: "8-14 days",
        value: "8-14 days"
      },
      {
        label: "15-28 days",
        value: "15-28 days"
      },
      {
        label: "28+ days",
        value: "28+ days"
      }
    ]
  },
  adverse_event: {
    type: [Object],
    minCount: 1
  },
  "adverse_event.$.type": {
    label: "Adverse event",
    options: [
      {
        label: "Airway",
        value: "Airway"
      },
      {
        label: "Cardiac arrest / failure / arrhythmia",
        value: "Cardiac arrest / failure / arrhythmia"
      },
      {
        label: "Cerebrovascular Event",
        value: "Cerebrovascular Event"
      },
      {
        label: "Cutaneous injury",
        value: "Cutaneous injury"
      },
      {
        label: "Delirium / altered mental status",
        value: "Delirium / altered mental status"
      },
      {
        label: "Dysphagia / dysphonia",
        value: "Dysphagia / dysphonia"
      },
      {
        label: "Fall",
        value: "Fall"
      },
      {
        label: "GI Bleeding",
        value: "GI Bleeding"
      },
      {
        label: "Hematoma",
        value: "Hematoma"
      },
      {
        label: "Ileus / bowel obstruction",
        value: "Ileus / bowel obstruction"
      },
      {
        label: "Implant / Instrument related",
        value: "Implant / Instrument related"
      },
      {
        label: "Revision",
        value: "Revision"
      },
      {
        label: "Infection: Superficial wound",
        value: "Infection: Superficial wound"
      },
      {
        label: "Infection: Urinary tract",
        value: "Infection: Urinary tract"
      },
      {
        label: "Infection: Deep wound",
        value: "Infection: Deep wound"
      },
      {
        label: "Infection: Systemic",
        value: "Infection: Systemic"
      },
      {
        label: "Myocardial Infarction",
        value: "Myocardial Infarction"
      },
      {
        label: "Neurologic deterioration: Cord > motor grade in ASIA scale",
        value: "Neurologic deterioration: Cord > motor grade in ASIA scale"
      },
      {
        label: "Neurologic deterioration: Nerve root > 1MRC grade",
        value: "Neurologic deterioration: Nerve root > 1MRC grade"
      },
      {
        label: "Neurologic deterioration: Cauda equina syndrome",
        value: "Neurologic deterioration: Cauda equina syndrome"
      },
      {
        label: "Non-union",
        value: "Non-union"
      },
      {
        label: "Pain: New Onset",
        value: "Pain: New Onset"
      },
      {
        label: "Pneumonia",
        value: "Pneumonia"
      },
      {
        label: "Renal insufficiency",
        value: "Renal insufficiency"
      },
      {
        label: "Thromboembolic Event: DVT",
        value: "Thromboembolic Event: DVT"
      },
      {
        label: "Thromboembolic Event: Pulmonary embolism",
        value: "Thromboembolic Event: Pulmonary embolism"
      },
      {
        label: "Urinary",
        value: "Urinary"
      },
      {
        label: "Wound dehiscence",
        value: "TWound dehiscence"
      },
      {
        label: "Wound drainage: CSF",
        value: "Wound drainage: CSF"
      },
      {
        label: "Wound drainage: Serious",
        value: "Wound drainage: Serious"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  "adverse_event.$.grade": {
    label: "Grade",
    type: String,
    allowedValues: [
      "Grade 1",
      "Grade 2",
      "Grade 3",
      "Grade 4",
      "Grade 5",
      "Grade 6"
    ]
  },
  "adverse_event.$.date": {
    label: "Date of recognition"
  },
  "adverse_event.$.other.details": {
    label: "Please specify"
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.DischargeAdverseEvent) {
    details.push({
      name: "DischargeAdverseEvent",
      message: "Discharge AdverseEvent is required"
    });
  }
};

const bridge = new GraphQLBridge(
  schema.getType("PhysicianDischarge"),
  schemaValidator,
  schemaData
);

export default bridge;
