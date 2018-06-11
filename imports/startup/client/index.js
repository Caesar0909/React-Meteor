import React from "react";
import { render } from "react-dom";
import { Meteor } from "meteor/meteor";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import { ApolloLink } from "apollo-link";
import { withClientState } from "apollo-link-state";
import { HttpLink } from "apollo-link-http";
import "react-dates/initialize";

import "bootstrap/dist/css/bootstrap.css";
import "fullcalendar-reactwrapper/dist/css/fullcalendar.min.css";
import { defaults, resolvers } from "../../api/graphqlDefinitions";
import App from "../../ui/layouts/App/App";

import "../../ui/stylesheets/app.scss";

const stateLink = withClientState({ resolvers, defaults });

const httpLink = new HttpLink({
  uri: Meteor.absoluteUrl("graphql")
});

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, httpLink])
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

Meteor.startup(() => {
  render(<ApolloApp />, document.querySelector("#react-root"));
});
