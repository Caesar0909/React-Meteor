import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { RadioField, BoolField } from "../../../../Input";

const Glasgow = ({ model }) => (
  <Container>
    <Row>
      <h2>Glasgow Form</h2>
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

export default Glasgow;
