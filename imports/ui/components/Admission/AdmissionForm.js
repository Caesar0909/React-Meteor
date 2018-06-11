import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  AutoForm,
  SubmitField,
  DateField,
  SelectField
} from "uniforms-bootstrap4";

import AdmissionSchema from "../../../api/Admissions/bridge";

const AdmissionForm = ({
  model,
  patients,
  locations,
  appointment,
  handleSubmit,
  history,
  onValidate
}) => {
  let patientsOptions = [];
  if (patients) {
    patientsOptions = patients.map(item => ({
      value: item._id,
      label: item.firstName
    }));
  }
  let locationsOptions = [];
  if (locations && locations.length > 0) {
    locationsOptions = locations.map(item => ({
      value: item._id,
      label: item.name
    }));
  }

  const admissionModel = {
    ...model,
    start: new Date(model.start)
  };

  if (appointment) {
    console.log("appointment on admission", appointment);
    admissionModel.patientId = appointment.patient._id;
    admissionModel.locationId = appointment.locationId;
  }

  return (
    <AutoForm
      schema={AdmissionSchema}
      onSubmit={doc => handleSubmit(doc, history)}
      model={admissionModel}
      onValidate={onValidate}
      validate="onSubmit"
    >
      <Container>
        <Row>
          <Col>
            <SelectField
              name="patientId"
              placeholder="Select a Patient"
              options={patientsOptions}
            />
            <DateField name="start" />
            <SelectField
              name="locationId"
              placeholder="Select a Location"
              options={locationsOptions}
            />
            <div className="super-special-class">
              <SubmitField
                className="super-special-class-with-suffix"
                disabled={false}
                value="Save"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </AutoForm>
  );
};

AdmissionForm.defaultProps = {
  patients: [],
  locations: [],
  appointment: null
};

AdmissionForm.propTypes = {
  model: PropTypes.object.isRequired,
  patients: PropTypes.array,
  locations: PropTypes.array,
  appointment: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  onValidate: PropTypes.func.isRequired
};

export default AdmissionForm;
