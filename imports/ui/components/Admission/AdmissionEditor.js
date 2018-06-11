import React, { Component } from "react";
import PropTypes from "prop-types";
import { Bert } from "meteor/themeteorchef:bert";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";

import AdmissionForm from "./AdmissionForm";
import admissionQuery from "../../../api/Admissions/queries/admission.graphql";
import admissions from "../../../api/Admissions/queries/admissions.graphql";
import createAdmission from "../../../api/Admissions/mutations/createAdmission.graphql";
import getLocations from "../../../api/Locations/queries/getLocations.graphql";
import patientsNotAdmitted from "../../../api/Patients/queries/patientsNotAdmitted.graphql";
import appointmentsQuery from "../../../api/Appointments/queries/appointments.graphql";
import getAppointment from "../../../api/Appointments/queries/getAppointment.graphql";

class AdmissionEditor extends Component {
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

  handleSubmit = (admission, history) => {
    const notExistingAdmission = !admission._id;
    const newAdmission = _.omit(admission, [
      "__typename",
      "patient",
      "location"
    ]);

    const { appointment } = this.props;
    if (appointment) {
      newAdmission.appointmentId = appointment._id;
    }

    this.props
      .createAdmission({
        variables: { admission: newAdmission }
      })
      .then(({ data }) => {
        const confirmation = notExistingAdmission
          ? "Admission added!"
          : "Admission updated!";

        Bert.alert(confirmation, "success");
        history.push(`/admissions`);
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
      admission,
      patientsNotAdmitted: { loading, patientsNotAdmitted },
      GetLocations: { locations },
      history,
      userId,
      appointment,
      match
    } = this.props;
    const newAdmission = admission ? admission : {};
    if (!newAdmission._id) {
      newAdmission.createdAt = new Date();
      newAdmission.start = new Date();
      newAdmission.isActive = true;
      newAdmission.createdBy = userId;
    }
    return (
      <div>
        <AdmissionForm
          model={newAdmission}
          patients={patientsNotAdmitted}
          locations={locations}
          handleSubmit={this.handleSubmit}
          history={history}
          onValidate={this.onValidate}
          userId={userId}
          appointment={appointment}
          validate="onChangeAfterSubmit"
        />
      </div>
    );
  }
}

AdmissionEditor.defaultProps = {
  admission: null
};

AdmissionEditor.propTypes = {
  admission: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  createAdmission: PropTypes.func.isRequired
};

export default compose(
  graphql(getLocations, {
    name: "GetLocations",
    options: { fetchPolicy: "cache-and-network" }
  }),
  graphql(patientsNotAdmitted, {
    name: "patientsNotAdmitted"
  }),
  graphql(getAppointment, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => {
      const id = match ? match.params.appointmentId : "";
      return {
        variables: { id }
      };
    }
  }),
  graphql(createAdmission, {
    name: "createAdmission",
    options: {
      refetchQueries: [
        {
          query: admissions,
          variables: { filter: "" }
        },
        {
          query: patientsNotAdmitted
        },
        {
          query: appointmentsQuery,
          variables: { filter: "" }
        }
      ]
    }
  })
)(AdmissionEditor);
