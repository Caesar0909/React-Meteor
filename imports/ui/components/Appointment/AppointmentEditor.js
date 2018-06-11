import React, { Component } from "react";
import PropTypes from "prop-types";

import { Bert } from "meteor/themeteorchef:bert";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

import AppointmentForm from "./AppointmentForm";
import appointmentsQuery from "../../../api/Appointments/queries/appointments.graphql";
import physiciansQuery from "../../../api/Users/queries/physicians.graphql";
import createAppointment from "../../../api/Appointments/mutations/createAppointment.graphql";
import GetLocations from "../../../api/Locations/queries/getLocations.graphql";
import patientsNotAdmitted from "../../../api/Patients/queries/patientsNotAdmitted.graphql";

class AppointmentEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  handleSubmit = (appointment, history, match) => {
    const notExistingAppointment = !appointment._id;

    this.props
      .createAppointment({
        variables: { appointment }
      })
      .then(({ data }) => {
        const confirmation = notExistingAppointment
          ? "Appointment added!"
          : "Appointment updated!";

        Bert.alert(confirmation, "success");
        history.push(`/appointments`);
      })
      .catch(error => {
        Bert.alert(error.message, "danger");
      });
  };
  onValidate = (model, error, callback) => {
    if (error) {
      Bert.alert(error.details[error.details.length - 1].message, "danger");
      return callback();
    } else {
      return callback(null);
    }
  };
  render() {
    const {
      appointment,
      patientsNotAdmitted: { loading, patientsNotAdmitted },
      GetLocations: { locations },
      physicians: { physicians },
      history,
      userId,
      match
    } = this.props;
    const newAppointment = appointment ? appointment : {};
    if (!newAppointment._id) {
      newAppointment.createdAt = new Date();
      newAppointment.start = new Date();
      newAppointment.createdBy = userId;
    }
    return (
      <div>
        <AppointmentForm
          model={newAppointment}
          patients={patientsNotAdmitted}
          physicians={physicians}
          locations={locations}
          handleSubmit={this.handleSubmit}
          history={history}
          onValidate={this.onValidate}
          userId={userId}
          validate="onChangeAfterSubmit"
        />
      </div>
    );
  }
}

AppointmentEditor.defaultProps = {
  appointment: null
};

AppointmentEditor.propTypes = {
  appointment: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  createAppointment: PropTypes.func.isRequired
};

export default compose(
  graphql(physiciansQuery, {
    name: "physicians"
  }),
  graphql(GetLocations, {
    name: "GetLocations",
    options: { fetchPolicy: "cache-and-network" }
  }),
  graphql(patientsNotAdmitted, {
    name: "patientsNotAdmitted"
  }),
  graphql(createAppointment, {
    name: "createAppointment",
    options: {
      refetchQueries: [
        {
          query: appointmentsQuery,
          variables: { filter: "" }
        }
      ]
    }
  })
)(AppointmentEditor);
