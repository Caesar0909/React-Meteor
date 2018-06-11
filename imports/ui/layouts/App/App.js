/* eslint-disable jsx-a11y/no-href */

import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { BrowserRouter as Router } from "react-router-dom";
import { withTracker } from "meteor/react-meteor-data";
import { Roles } from "meteor/alanning:roles";

import SideNav from "../../components/SideNav/SideNav";
import Navigation from "../../components/Navigation/Navigation";
import VerifyEmailAlert from "../../components/VerifyEmailAlert/VerifyEmailAlert";
import getUserName from "../../../modules/get-user-name";
import Routes from "../../routes";

import "./App.css";
import Breadcrumbs from "../../components/BreadCrumb/BreadCrumbs";

// <body class="fixed-header mac desktop pace-done">
const App = props => (
  <Router>
    {!props.loading ? (
      <div className="App">
        <SideNav {...props} />
        <div className="page-container">
          <div className="header">
            <div className="container">
              <Navigation {...props} />
            </div>
          </div>

          <div className="page-content-wrapper ">
            <div
              className={
                props.authenticated ? "content sm-gutter" : "sm-gutter"
              }
            >
              <div className="jumbotron" data-pages="parallax">
                <div className="container-fluid container-fixed-lg sm-p-l-0 sm-p-r-0">
                  <div className="inner">
                    <Breadcrumbs />
                  </div>
                </div>
              </div>
              <div className="container-fluid container-fixed-lg">
                <Routes {...props} />
              </div>
            </div>
          </div>
        </div>
        {props.authenticated ? (
          <VerifyEmailAlert
            userId={props.userId}
            emailVerified={props.emailVerified}
            emailAddress={props.emailAddress}
          />
        ) : (
          ""
        )}
      </div>
    ) : (
      ""
    )}
  </Router>
);

App.defaultProps = {
  userId: "",
  emailAddress: ""
};

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string,
  emailAddress: PropTypes.string,
  userIsAdmin: PropTypes.bool.isRequired,
  emailVerified: PropTypes.bool.isRequired,
  authenticated: PropTypes.bool.isRequired
};

export default withTracker(() => {
  const loggingIn = Meteor.loggingIn();
  const user = Meteor.user();
  const userId = Meteor.userId();
  const loading = !Roles.subscription.ready();
  const userIsAdmin = Roles.userIsInRole(userId, "admin");
  const name =
    user && user.profile && user.profile.name && getUserName(user.profile.name);
  const emailAddress = user && user.emails && user.emails[0].address;
  const applicationRoles = Roles.getAllRoles().fetch();

  return {
    loading,
    loggingIn,
    authenticated: !loggingIn && !!userId,
    userIsAdmin: !loading && userIsAdmin,
    name: name || emailAddress,
    user,
    roles: !loading && Roles.getRolesForUser(userId),
    applicationRoles,
    userId,
    emailAddress,
    emailVerified: true //user && user.emails ? user && user.emails && user.emails[0].verified : true,
  };
})(App);
