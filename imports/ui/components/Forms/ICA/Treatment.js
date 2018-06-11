import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { RadioField } from "../../Input";

import treatment from "../../../../api/Forms/initialClinicalAssessment/treatment.json";

const Treatment = ({ model }) => (
  <Container>
    <Row>
      <Col>
        <RadioField
          name="treatmentType"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
    </Row>
    {model.treatmentType ? (
      <Row>
        <Col>
          <RadioField
            name="treatmentOption"
            inputClassName="radio radio-success"
            options={treatment[model.treatmentType].treatmentOptions}
            showInlineError
          />
        </Col>
      </Row>
    ) : (
      ""
    )}
  </Container>
);

Treatment.propTypes = {
  model: PropTypes.object.isRequired
};

export default Treatment;
