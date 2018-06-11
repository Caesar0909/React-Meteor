import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { RadioField } from "../../Input";

const Mechanism = () => (
  <Container>
    <Row>
      <h2>Mechanism Form</h2>
    </Row>
    <Row>
      <Col>
        <RadioField
          name="mechanism.value"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <Col>
        <RadioField
          name="mechanism.energy"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
    </Row>
  </Container>
);

Mechanism.propTypes = {
  model: PropTypes.object.isRequired
};

export default Mechanism;
