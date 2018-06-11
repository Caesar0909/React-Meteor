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
import AE3Month from "./AE3Month";
import SummaryDiagnosis from "../SummaryDiagnosis/SummaryDiagnosis";

const Start3MonthPP = props => {
  return (
    <Container>
      <SummaryDiagnosis questionnaire={props.questionnaire}/>
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
            <AE3Month />
          </DisplayIf>
        </Col>
      </Row>
    </Container>
  );
}

Start3MonthPP.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default Start3MonthPP;
