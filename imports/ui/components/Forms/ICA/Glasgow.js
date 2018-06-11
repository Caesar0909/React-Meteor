import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { RadioField } from "../../Input";

const Glasgow = ({ model }) => (
  <Container>
    <Row>
      <h2>Glasgow Form</h2>
    </Row>
    <Row>
      <h3>Score - {model.glasgow ? model.glasgow.score : ""}</h3>
    </Row>
    <Row>
      <Col>
        <RadioField
          name="glasgow.eye"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <Col>
        <RadioField
          name="glasgow.motor"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <Col>
        <RadioField
          name="glasgow.verbal"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
    </Row>
  </Container>
);

Glasgow.propTypes = {
  model: PropTypes.object.isRequired
};

export default Glasgow;
