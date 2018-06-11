import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import cors from "cors";

import { resolvers, typeDefs } from "../../api/graphqlDefinitions";

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer(
  {
    schema
  },
  {
    configServer(graphQLServer) {
      graphQLServer.use(cors());
    },
    graphiql: true
  }
);
