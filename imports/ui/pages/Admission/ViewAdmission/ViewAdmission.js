import React from "react";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";
import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label
} from "reactstrap";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import Moment from "react-moment";
import moment from "moment";
import { Bert } from "meteor/themeteorchef:bert";
import NotFound from "../../NotFound/NotFound";
import admission from "../../../../api/Admissions/queries/admission.graphql";
import admissions from "../../../../api/Admissions/queries/admissions.graphql";
import patientsNotAdmitted from "../../../../api/Patients/queries/patientsNotAdmitted.graphql";
import dischargeAdmission from "../../../../api/Admissions/mutations/discharge.graphql";
import { Card, CardHeader, CardBody } from "../../../components/Card";

class ViewAdmission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      dischargeDate: moment(new Date()),
      focused: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      admission: { location, patient, ...admissionDischarged },
      history,
      dischargeAdmission
    } = this.props;
    delete admissionDischarged.__typename;
    dischargeAdmission({
      variables: {
        admission: {
          ...admissionDischarged,
          end: this.state.dischargeDate
        }
      }
    })
      .then(() => {
        Bert.alert("Patient discharged!", "success");
        history.push("/admissions");
      })
      .catch(error => {
        Bert.alert(error.message, "danger");
      });
  };

  render() {
    const { admission, match, history } = this.props;

    return admission ? (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader
                title={`${admission.patient.firstName} ${
                  admission.patient.lastName
                } `}
              >
                <h2 className="card-title" />
                <ButtonToolbar className="pull-right">
                  <ButtonGroup size="sm">
                    <Button onClick={() => history.push(`${match.url}/edit`)}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => this.setState({ show: true })}
                      className={
                        admission.isActive ? "text-danger" : "text-success"
                      }
                    >
                      {admission.isActive
                        ? "Discharge Patient"
                        : "Check-in Patient"}
                    </Button>
                    <Modal isOpen={this.state.show}>
                      <ModalHeader
                        toggle={() => this.setState({ show: false })}
                      >
                        Dischage Patient
                      </ModalHeader>
                      <Form onSubmit={this.handleSubmit}>
                        <ModalBody>
                          <FormGroup>
                            <Label>Date of Admission</Label>
                            <SingleDatePicker
                              date={moment(admission.createdAt)}
                              readOnly
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Date of Discharge</Label>
                            <SingleDatePicker
                              name="end"
                              className="form-control"
                              date={this.state.dischargeDate}
                              onDateChange={date =>
                                this.setState({ dischargeDate: date })
                              }
                              focused={this.state.focused}
                              onFocusChange={({ focused }) =>
                                this.setState({ focused })
                              }
                            />
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                          <Button
                            onClick={() => this.setState({ show: false })}
                          >
                            Cancel
                          </Button>
                          <Button type="submit" color="danger">
                            Discharge
                          </Button>
                        </ModalFooter>
                      </Form>
                    </Modal>
                  </ButtonGroup>
                </ButtonToolbar>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col className="col-lg-12 col-sm-12  d-flex flex-column">
                    <div
                      className="card social-card share  full-width m-b-10 no-border"
                      data-social="item"
                    >
                      <div className="card-header ">
                        <h5 className="text-primary pull-left fs-12">
                          {admission.start}
                        </h5>
                        <div className="pull-right small hint-text">
                          Doc`s name <i className="fa fa-user-md" />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="card-description">
                        <h3>{admission.email}</h3>
                      </div>
                      <div className="card-footer clearfix">
                        <div className="pull-right hint-text">
                          {"Checked out at "}
                          <Moment format="YYYY/MM/DD">{admission.end}</Moment>
                        </div>
                        <div className="pull-left hint-text">
                          {"Checked in at "}
                          <Moment format="YYYY/MM/DD">{admission.start}</Moment>
                        </div>
                        <div className="clearfix" />
                      </div>
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-12 col-sm-12  d-flex flex-column">
            <Nav tabs>
              <NavItem>
                <NavLink href="#" active>
                  Patient Info
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">History</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Row>
      </Container>
    ) : (
      <NotFound />
    );
  }
}

ViewAdmission.propTypes = {
  admission: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  dischargeAdmission: PropTypes.func.isRequired
};

export default compose(
  graphql(admission, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => {
      const id = match ? match.params._id : "";
      return {
        variables: { id },
        refetchQueries: [admission]
      };
    }
  }),
  graphql(dischargeAdmission, {
    name: "dischargeAdmission",
    options: {
      refetchQueries: [
        {
          query: admissions,
          variables: { filter: "" }
        },
        {
          query: patientsNotAdmitted
        }
      ]
    }
  })
)(ViewAdmission);
