import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../../../../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  DateOfFollowUp: {
    label: "Date of Follow Up"
  },
  TreatmentChanged: {
    label: "Has the recommended treatment changed since the last visit?"
  },
  ae12wk_ae: {
    label: "Has the patient experienced a new adverse event?"
  },
  "adverse_event.$.type": {
    label: "Select the type of adverse event",
    options: [
      {
        label: "Cerebrovascular Event",
        value: "Cerebrovascular Event"
      },
      {
        label: "Dysphagia / dysphonia",
        value: "Dysphagia / dysphonia"
      },
      {
        label: "Hematoma",
        value: "Hematoma"
      },
      {
        label: "Implant / Instrumentation related ",
        value: "Implant / Instrumentation related"
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
        value: "Wound dehiscence"
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
    options: [
      {
        label: "Grade 1",
        value: "Grade 1"
      },
      {
        label: "Grade 2",
        value: "Grade 2"
      },
      {
        label: "Grade 3",
        value: "Grade 3"
      },
      {
        label: "Grade 4",
        value: "Grade 4"
      },
      {
        label: "Grade 5",
        value: "Grade 5"
      },
      {
        label: "Grade 6",
        value: "Grade 6"
      }
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
  if (!model.ae12wk_ae) {
    details.push({
      name: "ae12wk_ae",
      message: "ae12wk_ae is required"
    });
  }
};

const bridge = new GraphQLBridge(
  schema.getType("PhysicianPre12WkAE"),
  schemaValidator,
  schemaData
);

export default bridge;
