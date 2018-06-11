import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../../../../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  DiagnosisChanged: {
    label: "Has the diagnosis changed since the last visit?"
  },
  TreatmentChanged: {
    label: "Has the recommended treatment changed since the last visit?"
  },
  AdverseEventPostDischarge: {
    label: "Has the patient experienced an adverse event since the last visit?"
  },
  adverse_event: {
    type: [Object],
    minCount: 1
  },
  "adverse_event.$.type": {
    label: "Adverse event1",
    type: String,
    allowedValues: [
      "Implant / Instrumentation related ",
      "Infection: Superficial wound",
      "Infection: Deep wound",
      "Non-union (pseudoarthrosis)",
      "Other (please specify)"
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
    label: "Date of recognition",
    type: Date,
    defaultValue: new Date()
  },
  "adverse_event.$.other.details": {
    label: "Please specify"
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.DiagnosisChanged) {
    details.push({
      name: "DiagnosisChanged",
      message: "Diagnosis changed is required"
    });
  }
};

const bridge = new GraphQLBridge(
  schema.getType("Physician12MonthFollowUp"),
  schemaValidator,
  schemaData
);

export default bridge;
