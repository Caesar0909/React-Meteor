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
  Label,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Moment from "react-moment";
import { Bert } from "meteor/themeteorchef:bert";
import SweetAlert from "sweetalert2-react";
import "sweetalert2/dist/sweetalert2.css";

import NotFound from "../../NotFound/NotFound";
import { CareplanList } from "../../../components/Careplan";
import patient from "../../../../api/Patients/queries/patient.graphql";
import patientSearchQuery from "../../../../api/Patients/queries/patientSearchQuery.graphql";
import patientsNotAdmitted from "../../../../api/Patients/queries/patientsNotAdmitted.graphql";
import archiveUnarchiveMutation from "../../../../api/Patients/mutations/archiveUnarchive.graphql";

class ViewPatient extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 0,
      show: false
    };
  }

  handleArchive(patient) {
    const { history, archiveUnarchive } = this.props;
    const { __typename, ...patientToArchive } = patient;
    archiveUnarchive({
      variables: { patient: patientToArchive }
    })
      .then(() => {
        Bert.alert("Patient archived!", "success");
        history.push("/patients");
      })
      .catch(error => {
        Bert.alert(error.message, "danger");
      });
  }

  handleTabs(currentTab) {
    this.setState({ currentTab });
  }

  render() {
    const { patient, match, history } = this.props;
    const { currentTab } = this.state;

    return patient ? (
      <Container>
        <Row>
          <div className="col-sm-12">
            <div className="card card-transparent">
              <div className="card-header">
                <ButtonToolbar className="pull-right">
                  <ButtonGroup size="sm">
                    <Button onClick={() => history.push(`${match.url}/edit`)}>
                      Edit
                    </Button>
                    <Button
                      onClick={() => this.setState({ show: true })}
                      className={
                        patient.isActive ? "text-danger" : "text-success"
                      }
                    >
                      {patient.isActive
                        ? "Archive Patient"
                        : "Unarchive Patient"}
                    </Button>
                    <SweetAlert
                      showCancelButton
                      show={this.state.show}
                      title={`You will ${
                        patient.isActive ? "archive" : "unarchive"
                      } patient ${patient.firstName}`}
                      text="Are you sure?"
                      onConfirm={() => this.handleArchive(patient)}
                    />
                  </ButtonGroup>
                </ButtonToolbar>
              </div>
              <div className="card-block">
                <Row>
                  <Col>
                    <div
                      className="card social-card share  full-width m-b-10 no-border"
                      data-social="item"
                    >
                      <div className="card-header ">
                        <h2 className="text-primary pull-left">
                          {patient.firstName} {patient.middleNames}{" "}
                          {patient.lastName}
                          <br />
                          {patient.isActive ? (
                            <span className="label success">Active</span>
                          ) : (
                            <span className="label danger">Archived</span>
                          )}
                        </h2>
                        <div className="pull-right small hint-text">
                          {patient.gender}
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="card-description">
                        <p>Email: {patient.email}</p>
                      </div>
                      {/* <div className="card-footer clearfix">
                        <div className="pull-left">
                          via <span className="text-complete">Pages</span>
                        </div>
                        <div className="pull-right hint-text">
                          {"Record created at "}
                          <Moment format="YYYY/MM/DD">
                            {patient.createdAt}
                          </Moment>
                        </div>
                        <div className="clearfix" />
                      </div> */}
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </Row>
        <Row>
          <Col className="col-lg-12 col-sm-12 d-flex flex-column">
            <Nav tabs>
              <NavItem>
                <NavLink
                  href="#"
                  active={currentTab === 0}
                  onClick={() => this.handleTabs(0)}
                >
                  Careplans
                </NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href="#"
                  active={currentTab === 1}
                  onClick={() => this.handleTabs(1)}
                >
                  Careplans
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="#"
                  active={currentTab === 2}
                  onClick={() => this.handleTabs(2)}
                >
                  Visit history
                </NavLink>
              </NavItem> */}
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-12 col-sm-12 d-flex flex-column">
            {currentTab === 0 ? (
              <CareplanList patient={patient} patientId={patient._id} />
            ) : (
              false
            )}
            {/* {currentTab === 1 ? (
              <CareplanList patient={patient} patientId={patient._id} />
            ) : (
              false
            )}
            {currentTab === 2 ? (
              <div>TODO: Create a PatientVisitHistory Component</div>
            ) : (
              false
            )} */}
          </Col>
        </Row>
      </Container>
    ) : (
      <NotFound />
    );
  }
}

ViewPatient.propTypes = {
  archiveUnarchive: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  graphql(patient, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => {
      const id = match ? match.params._id : "";
      return {
        variables: { id },
        refetchQueries: [patient]
      };
    }
  }),
  graphql(archiveUnarchiveMutation, {
    name: "archiveUnarchive",
    options: {
      refetchQueries: [
        {
          query: patientSearchQuery,
          variables: { filter: "" }
        },
        {
          query: patientsNotAdmitted
        }
      ]
    }
  })
)(ViewPatient);
