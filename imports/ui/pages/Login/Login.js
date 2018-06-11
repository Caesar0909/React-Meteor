import React from "react";
import { Row, Col, FormGroup, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { Bert } from "meteor/themeteorchef:bert";
import OAuthLoginButtons from "../../components/OAuthLoginButtons/OAuthLoginButtons";
import AccountPageFooter from "../../components/AccountPageFooter/AccountPageFooter";
import validate from "../../../modules/validate";

import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const component = this;

    validate(component.form, {
      rules: {
        emailAddress: {
          required: true,
          email: true
        },
        password: {
          required: true
        }
      },
      messages: {
        emailAddress: {
          required: "Need an email address here.",
          email: "Is this email address correct?"
        },
        password: {
          required: "Please enter a password."
        }
      },
      submitHandler() {
        component.handleSubmit();
      }
    });
  }

  handleSubmit() {
    Meteor.loginWithPassword(
      this.emailAddress.value,
      this.password.value,
      error => {
        if (error) {
          Bert.alert(error.reason, "danger");
        } else {
          Bert.alert("Welcome back!", "success");
        }
      }
    );
  }

  render() {
    return (
      <div className="lock-container full-height">
        <div className="login full-height sm-p-t-50 align-items-center d-md-flex">
          <Row className="full-width">
            <Col>
              <h4 className="page-header">Log In</h4>
              {/* 
                <Row>
                <Col>
                  <OAuthLoginButtons
                    services={['facebook', 'google']}
                    emailMessage={{
                      offset: 100,
                      text: 'Log In with an Email Address',
                    }}
                  />
                </Col>
               </Row> */}
              <form
                ref={form => (this.form = form)}
                onSubmit={event => event.preventDefault()}
              >
                <FormGroup className="form-group-default">
                  <Label>Email Address</Label>
                  <input
                    type="email"
                    name="emailAddress"
                    ref={emailAddress => (this.emailAddress = emailAddress)}
                    className="form-control"
                  />
                </FormGroup>
                <FormGroup className="form-group-default">
                  <Label className="clearfix">
                    <span className="pull-left">Password</span>
                    <Link className="pull-right" to="/recover-password">
                      Forgot password?
                    </Link>
                  </Label>
                  <input
                    type="password"
                    name="password"
                    ref={password => (this.password = password)}
                    className="form-control"
                  />
                </FormGroup>
                <Button className="btn-primary btn-cons">Log In</Button>
                <AccountPageFooter>
                  <p>
                    {"Don't have an account?"} <Link to="/signup">Sign Up</Link>.
                  </p>
                </AccountPageFooter>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
