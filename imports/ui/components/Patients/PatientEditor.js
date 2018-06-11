import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import { Container, Row, Col } from "reactstrap";
import {
  AutoForm,
  AutoField,
  SubmitField,
  TextField,
  SelectField
} from "uniforms-bootstrap4";
import { Bert } from "meteor/themeteorchef:bert";
import gql from "graphql-tag";

import BoolField from "../Input/BoolField";
import PatientSchema from "../../../api/Patients/bridge";
import patientQuery from "../../../api/Patients/queries/patient.graphql";
import patientSearchQuery from "../../../api/Patients/queries/patientSearchQuery.graphql";
import createPatient from "../../../api/Patients/mutations/createPatient.graphql";

const PatientForm = ({
  model,
  handleSubmit,
  history,
  userId,
  onValidate,
  match,
  onChange
}) => (
  <AutoForm
    schema={PatientSchema}
    onSubmit={doc => handleSubmit(doc, userId, history)}
    model={model}
    onValidate={onValidate}
    onChange={onChange}
    validate="onSubmit"
  >
    <Container>
      <Row>
        <Col>
          <div className="card">
            <div className="card-block">
              <div className="card-title"> Personal details </div>
              <AutoField name="firstName" />
              <TextField name="middleNames" />
              <TextField name="lastName" />
              <AutoField name="identifiers" />
            </div>
            <div className="card-block">
              <div className="card-title"> Contact</div>
              <AutoField name="email" />
              <SelectField name="gender" />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="super-special-class">
            <SubmitField
              className="super-special-class-with-suffix"
              disabled={false}
            />
          </div>
        </Col>
      </Row>
    </Container>
  </AutoForm>
);

PatientForm.propTypes = {
  model: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

class PatientEditor extends React.Component {
  handleSubmit = (patient, userId, history, match) => {
    const notExistingPatient = !patient._id;

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
      patient.identifiers = [
        {
          type: "PHN",
          value: ""
        },
        {
          type: "MRN",
          value: ""
        },
        {
          type: "Other",
          value: ""
        }
      ];
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
