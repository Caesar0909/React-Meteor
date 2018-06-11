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
import Moment from "react-moment";
import { Bert } from "meteor/themeteorchef:bert";
import NotFound from "../../NotFound/NotFound";
import getAppointment from "../../../../api/Appointments/queries/getAppointment.graphql";
import appointments from "../../../../api/Appointments/queries/appointments.graphql";
import { Card, CardHeader, CardBody } from "../../../components/Card";

class ViewAppointment extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const {
      appointment: { location, patient, ...appointmentDischarged },
      history
    } = this.props;
  };

  render() {
    const { appointment, match, history } = this.props;

    return appointment ? (
      <Container>
        <Row>
          <Col>
            <Card>
              <CardHeader
                title={`${appointment.patient.firstName} ${
                  appointment.patient.lastName
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
                        appointment.isActive ? "text-danger" : "text-success"
                      }
                    >
                      {appointment.isActive
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
                            <input
                              type="date"
                              name="admission-date"
                              value={appointment.createdAt}
                              disabled
                              className="form-control"
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label>Date of Discharge</Label>
                            <input
                              type="date"
                              name="end"
                              className="form-control"
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
                          {appointment.start}
                        </h5>
                        <div className="pull-right small hint-text">
                          Doc`s name <i className="fa fa-user-md" />
                        </div>
                        <div className="clearfix" />
                      </div>
                      <div className="card-description">
                        <h3>{appointment.email}</h3>
                      </div>
                      <div className="card-footer clearfix">
                        <div className="pull-right hint-text">
                          {"Checked out at "}
                          <Moment format="YYYY/MM/DD">{appointment.end}</Moment>
                        </div>
                        <div className="pull-left hint-text">
                          {"Checked in at "}
                          <Moment format="YYYY/MM/DD">
                            {appointment.start}
                          </Moment>
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

ViewAppointment.propTypes = {
  appointment: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  graphql(getAppointment, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => {
      const id = match ? match.params._id : "";
      return {
        variables: { id },
        refetchQueries: [getAppointment]
      };
    }
  })
)(ViewAppointment);
