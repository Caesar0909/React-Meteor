import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  AutoForm,
  AutoField,
  ListField,
  ListItemField,
  SubmitField,
  TextField,
  HiddenField,
  DateField
} from "uniforms-bootstrap4";
import Select2 from "react-select2-wrapper";
import { SelectField } from "../Input";
import { Bert } from "meteor/themeteorchef:bert";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

import PatientForm from "./PatientForm";
import PatientSchema from "../../../api/Patients/bridge";
import patientQuery from "../../../api/Patients/queries/patient.graphql";
import patientSearchQuery from "../../../api/Patients/queries/patientSearchQuery.graphql";
import createPatient from "../../../api/Patients/mutations/createPatient.graphql";

class PatientEditor extends React.Component {
  handleSubmit = (patient, userId, history, match) => {
    const notExistingPatient = !patient._id;
    delete patient.__typename;
    this.props
      .createPatient({
        variables: { patient: { ...patient, createdBy: userId } }
      })
      .then(({ data }) => {
        const confirmation = notExistingPatient
          ? "Patient added!"
          : "Patient updated!";

        Bert.alert(confirmation, "success");
        history.push(`/patients/${data.createPatient._id}`);
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
    const { patient, history, userId, match } = this.props;
    if (!patient._id) {
      patient.createdAt = new Date();
      patient.createdBy = userId;
      patient.isActive = true;
      patient.gender = "M";
    }
    return (
      <PatientForm
        model={patient}
        handleSubmit={this.handleSubmit}
        onSubmitSuccess={() => alert("Promise resolved!")}
        history={history}
        onValidate={this.onValidate}
        userId={userId}
        validate="onChangeAfterSubmit"
      />
    );
  }
}

PatientEditor.defaultProps = {
  patient: { firstName: "", lastName: "", email: "" }
};

PatientEditor.propTypes = {
  patient: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  createPatient: PropTypes.func.isRequired
};

export default graphql(createPatient, {
  name: "createPatient",
  options: {
    refetchQueries: [
      {
        query: patientSearchQuery,
        variables: { filter: "" }
      }
    ]
  }
})(PatientEditor);
