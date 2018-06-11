import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { TextField, LongTextField } from "uniforms-bootstrap4";
import { RadioField, SelectField, BoolField } from "../Input";
import DisplayIf from "./DisplayIf";
import DateCustom from "./DateCustom";

const SurgicalSpine = ({ model }) => (
  <Container>
    <Row>
      <h2>SurgicalSpine Form</h2>
    </Row>
  </Container>
);

SurgicalSpine.propTypes = {
  model: PropTypes.object.isRequired
};

export default SurgicalSpine;
