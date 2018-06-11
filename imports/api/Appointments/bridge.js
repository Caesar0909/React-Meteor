import GraphQLBridge from "uniforms/GraphQLBridge";
import { makeExecutableSchema } from "graphql-tools";

import { resolvers, typeDefs } from "../graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

const schemaData = {
  appointmentType: {
    label: "Appointment Type",
    options: [
      {
        label: "Visit",
        value: "Visit"
      },
      {
        label: "Surgery",
        value: "Surgery"
      },
      {
        label: "Other",
        value: "Other"
      }
    ]
  },
  participants: {
    label: "Physicians"
  },
  patientId: {
    label: "Patient"
  },
  careplanId: {
    label: "Careplan"
  },
  start: {
    label: "Start Time"
  },
  end: {
    label: "End Time"
  },
  locationId: {
    label: "Location",
    options: [
      {
        label: "RAH",
        value: "RAH"
      },
      {
        label: "University of Alberta",
        value: "UAH"
      },
      {
        label: "Grey Nuns",
        value: "GNH"
      }
    ]
  }
};

const schemaValidator = model => {
  const details = [];
  if (!model.appointmentType) {
    details.push({
      name: "appointmentType",
      message: "AppointmentType is required!"
    });
  }

  if (details.length) {
    throw { details };
  }
};

const bridge = new GraphQLBridge(
  schema.getType("Appointment"),
  schemaValidator,
  schemaData
);

export default bridge;
