import React from "react";
import { Container, Row, Col } from "reactstrap";
import { RadioField, BoolField } from "../../../../Input";
import DisplayIf from "../../../DisplayIf";

const AISS = ({ model }) => (
  <Container>
    <Row>
      <h2>AISS</h2>
      <Col>
        <h3>Score {model.aiss ? model.aiss.score : ""} </h3>
      </Col>
    </Row>

    <Row>
      <Col>
        <BoolField
          name="aiss.required"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
    </Row>
    <DisplayIf
      condition={context => context.model.aiss && context.model.aiss.required}
    >
      <React.Fragment>
        <Row>
          <Col>
            <RadioField
              name="aiss.head"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="aiss.face"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="aiss.chest"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="aiss.abdomen"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="aiss.extremity"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="aiss.external"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
        </Row>
      </React.Fragment>
    </DisplayIf>
  </Container>
);

export default AISS;
