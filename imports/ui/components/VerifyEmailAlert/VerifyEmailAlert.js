import React from "react";
import PropTypes from "prop-types";
import { Alert, Button } from "reactstrap";
import { Meteor } from "meteor/meteor";
import { Bert } from "meteor/themeteorchef:bert";

import "./VerifyEmailAlert.scss";

const handleResendVerificationEmail = emailAddress => {
  Meteor.call("users.sendVerificationEmail", error => {
    if (error) {
      Bert.alert(error.reason, "danger");
    } else {
      Bert.alert(`Check ${emailAddress} for a verification link!`, "info");
    }
  });
};

const VerifyEmailAlert = ({ userId, emailVerified, emailAddress }) =>
  userId && !emailVerified ? (
    <div className="VerifyEmailAlert pgn-wrapper" data-position="bottom">
      <Alert className="verify-email text-center">
        <p>
          Hey friend! Can you <strong>verify your email address</strong> ({
            emailAddress
          }) for us?
          <div className="btn-group">
            <Button
              onClick={() => handleResendVerificationEmail(emailAddress)}
              href="#"
              className="btn btn-complete btn-cons"
            >
              Re-send verification email
            </Button>
            <Button href="#" className="btn btn-complete btn-cons">
              Dismiss
            </Button>
          </div>
        </p>
      </Alert>
    </div>
  ) : null;

VerifyEmailAlert.propTypes = {
  userId: PropTypes.string.isRequired,
  emailVerified: PropTypes.bool.isRequired,
  emailAddress: PropTypes.string.isRequired
};

export default VerifyEmailAlert;
