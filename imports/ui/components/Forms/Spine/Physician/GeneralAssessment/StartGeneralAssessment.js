import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  ListAddField,
  NestField,
  ListField,
  ListItemField
} from "uniforms-bootstrap4";
import { SelectField, BoolField } from "../../../../Input";
import DisplayIf from "../../../DisplayIf";
import DateCustom from "../../../DateCustom";
import Icon from "../../../../Icon/Icon";
import AEGeneral from "./AEGeneral";

const StartGeneralAssessmentPP = props => (
  <Container>
    <Row>
      <Col>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Summary Diagnosis</h2>
            <p> Diagnosed by:</p>
            <p> Diagnosis date:</p>
            <p> Pathology</p>
            <p> Upper/Lower clinical levels:</p>
            <p> Clinical category</p>
            <p> Neurological deficit</p>
            <p> Treatment: </p>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="DiagnosisChanged"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="TreatmentChanged"
          inputClassName="check-success"
          showInlineError
        />
        <DisplayIf condition={context => context.model.TreatmentChanged}>
          <p> insert treatment options here here.</p>
        </DisplayIf>
        <BoolField
          name="AdverseEventPostDischarge"
          inputClassName="check-success"
          showInlineError
        />
        <DisplayIf
          condition={context => context.model.AdverseEventPostDischarge}
        >
          <AEGeneral />
        </DisplayIf>
      </Col>
    </Row>
  </Container>
);

StartStartGeneralAssessmentPP.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default StartGeneralAssessmentPP;
