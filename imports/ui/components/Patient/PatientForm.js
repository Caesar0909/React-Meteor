import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  AutoForm,
  SubmitField,
  TextField,
  AutoField
} from "uniforms-bootstrap4";
import { SelectField } from "../Input";
import { DateCustomSingle } from "../Forms/DateCustomSingle";
import DateCustom from "../Forms/DateCustom";
import PatientSchema from "../../../api/Patients/bridge";

const PatientForm = ({
  model,
  handleSubmit,
  history,
  userId,
  onValidate,
  match,
  onChange
}) => {
  return (
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
            <TextField name="firstName" />
          </Col>
          <Col>
            <TextField name="middleNames" />
          </Col>
          <Col>
            <TextField name="lastName" />
          </Col>
        </Row>
        <Row>
          <Col>
            <TextField name="identifierPHN" />
          </Col>
          <Col>
            <TextField name="identifierMRN" />
          </Col>
          <Col>
            <TextField name="csorn" />
          </Col>
          <Col>
            <TextField name="identifierOther" />
          </Col>
        </Row>
        <Row>
          <Col>
            <AutoField name="email" />
          </Col>
          <Col>
            <SelectField name="gender" />
          </Col>
        </Row>

        <Row>
          <Col>
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

PatientForm.propTypes = {
  model: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default PatientForm;
