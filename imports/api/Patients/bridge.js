import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  firstName: {
    label: "First name"
  },
  middleNames: {
    label: "Middle names"
  },
  lastName: {
    label: "Last name"
  },
  identifierPHN: {
    label: "PHN"
  },
  identifierMRN: {
    label: "MRN"
  },
  identifierOther: {
    label: "Other"
  },
  email: {
    label: "Email"
  },
  DOB: {
    label: "Date of birth"
  },
  csorn: {
    label: "Csorn Id"
  },
  gender: {
    label: "Gender",
    options: [
      {
        label: "Male",
        value: "M"
      },
      {
        label: "Female",
        value: "F"
      },
      {
        label: "Other",
        value: "O"
      }
    ]
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.gender) {
    details.push({
      name: "gender",
      message: "Gender is required!"
    });
  }

  if (!model.lastName) {
    details.push({
      name: "lastName",
      message: "Last name is required!"
    });
  }
  if (!model.firstName) {
    details.push({
      name: "firstName",
      message: "First name is required!"
    });
  }

  if (details.length) {
    throw { details };
  }
};

const bridge = new GraphQLBridge(
  schema.getType("Patient"),
  schemaValidator,
  schemaData
);

export default bridge;
