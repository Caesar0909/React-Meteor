import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  patientId: {
    label: "Patient"
  },
  start: {
    label: "Arrival Date/Time"
  },
  locationId: {
    label: "Location"
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.patientId) {
    details.push({
      name: "patient",
      message: "Patient is required!"
    });
  }
  if (!model.start) {
    details.push({
      name: "start",
      message: "Arrival is required!"
    });
  }
  if (!model.locationId) {
    details.push({
      name: "location",
      message: "Location is required!"
    });
  }
  if (details.length) {
    throw { details };
  }
};

const bridge = new GraphQLBridge(
  schema.getType("Admission"),
  schemaValidator,
  schemaData
);

export default bridge;
