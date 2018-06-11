import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  ListField,
  ListItemField,
  ListAddField,
  NestField
} from "uniforms-bootstrap4";
import { SelectField, SelectArray, BoolField } from "../../../../Input";
import DisplayIf from "../../../DisplayIf";
import DateCustom from "../../../DateCustom";
import Icon from "../../../../Icon/Icon";

const StartDischarge = ({ model, changeDate }) => (
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
          name="AllogenicBloodProducts"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
      <Col>
        <BoolField
          name="DischargeAdverseEvent"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
      <Col>
        <BoolField
          name="AdmittedToICU"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
      <Col>
        <BoolField
          name="StepDownBed"
          inputClassName="check-success"
          showInlineError
        />
        <SelectField name="stay_length" />
      </Col>
    </Row>
    <Row>
      <Col>
        {/* <DisplayIf
          condition={context => context.model.adverse_event instanceof Array}
        >
          <ListField
            name="adverse_event"
            removeIcon={<Icon icon="minus" />}
            disable={false}
          >
            <ListItemField name="$" disable={false}>
              <NestField disable={false}>
                <ListAddField addIcon={<Icon icon="plus" />} />
                <Row all={props}>
                  <SelectField
                    name="type"
                    placeholder="Select"
                    checkboxes={false}
                    showInlineError
                  />

                  <SelectField
                    name="grade"
                    placeholder="Select"
                    showInlineError
                    checkboxes={false}
                  />
                  <DateCustom
                    all={props}
                    model={props.model}
                    onChangeDate={props.changeDate}
                    name="date"
                  />
                </Row>
              </NestField>
            </ListItemField>
          </ListField>
        </DisplayIf> */}
      </Col>
    </Row>
  </Container>
);

StartDischarge.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default StartDischarge;
