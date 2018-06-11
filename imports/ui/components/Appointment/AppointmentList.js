import React from "react";
import PropTypes from "prop-types";
import { pure, compose } from "recompose";
import { graphql } from "react-apollo";
import {
  Table,
  Button,
  Alert,
  Form,
  FormGroup,
  Label,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input
} from "reactstrap";
import Moment from "react-moment";
import FullCalendar from "fullcalendar-reactwrapper";
import Loading from "../../components/Loading/Loading";
import {
  CANCELLED,
  COMPLETED,
  SCHEDULED
} from "../../../Constants/AppointmentStatus";
import AppointmentsQuery from "../../../api/Appointments/queries/appointments.graphql";
import CancelAppointmentMutation from "../../../api/Appointments/mutations/cancelAppointment";
import CancelAppointment from "../../components/CancelAppointment/CancelAppointment";
import cancelReasons from "../../../Constants/CancelReasons";
import Event from "../Calendar/Event";

class AppointmentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      showModal: false,
      selectedEvent: {},
      cancelReason: "",
      comment: ""
    };
  }
  /* eslint-disable-nextline */
  handleCancelReasonChange = event => {
    this.setState({ cancelReason: event.target.value });
  };

  handleCancelCommentChange = event => {
    this.setState({ comment: event.target.value });
  };

  onCancelAppointmentClick = isCanceled => {
    if (isCanceled) {
      this.setState({ showM: false });
    }
  };

  toggleModal = () => {
    this.setState(currentState => {
      return { showModal: !currentState.showModal };
    });
  };

  handleEventClick = (calEvent, jsEvent, view) => {
    if (!this.state.show) {
      this.setState({
        show: true,
        selectedEvent: calEvent
      });
    }
  };

  handleCloseEvent = () => {
    this.setState({
      show: false,
      selectedEvent: {}
    });
  };

  render() {
    const { data: { loading, appointments }, match, history } = this.props;
    const events = appointments
      ? appointments.map(item => {
          return {
            id: item._id,
            start: item.start,
            status: item.status,
            end: item.end,
            title: item.patient?item.patient.firstName : null,
            patient: item.patient,
            color: item.status === CANCELLED ? "#f77975" : null,
            textColor: item.status === CANCELLED ? "#fff" : null
          };
        })
      : [];
    return (
      <div className="card-block">
        {appointments && appointments.length ? (
          <React.Fragment>
            <FullCalendar
              id="your-custom-ID"
              header={{
                left: "prev,next today myCustomButton",
                center: "title",
                right: "month,basicWeek,basicDay"
              }}
              defaultDate={new Date()}
              navLinks={true}
              editable={false}
              eventLimit={true}
              eventClick={this.handleEventClick}
              events={events}
            />
            <Event
              history={history}
              show={this.state.show}
              event={this.state.selectedEvent}
              onClose={this.handleCloseEvent}
              toggleModal={this.toggleModal}
              showModal={this.state.showModal}
              handleCancelReasonChange={this.handleCancelReasonChange}
              cancelReason={this.state.cancelReason}
              onCancelAppointmentClick={this.onCancelAppointmentClick}
              handleCancelCommentChange={this.handleCancelCommentChange}
              comment={this.state.comment}
            />
          </React.Fragment>
        ) : (
          <Alert color="warning">No appointments yet!</Alert>
        )}
      </div>
    );
  }
}

AppointmentList.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  graphql(AppointmentsQuery, {
    options: props => ({
      variables: { filter: props.filter }
    })
  }),
  graphql(CancelAppointmentMutation, {
    name: "cancelAppointment",
    options: {
      refetchQueries: [
        {
          query: AppointmentsQuery,
          variables: { filter: "" }
        }
      ]
    }
  }),
  pure
)(AppointmentList);
