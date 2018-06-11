import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  ListAddField,
  NestField,
  ListField,
  ListItemField
} from "uniforms-bootstrap4";
import { BoolField, SelectField } from "../../../../Input";
import DisplayIf from "../../../DisplayIf";
import DateCustom from "../../../DateCustom";
import Icon from "../../../../Icon/Icon";

const StartPre12WkAE = props => (
  <Container>
    <Row>
      <Col>
        <DateCustom
          label="Date Of FollowUp"
          model={props.model}
          onChangeDate={props.changeDate}
          field="date"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <BoolField name="ae12wk_ae" showInlineError />
      </Col>
    </Row>
    <Row>
      <Col>
        <ListField
          name="adverse_event"
          removeIcon={<Icon icon="minus" />}
          disable={false}
        >
          <ListItemField name="$" disable={false}>
            <NestField disable={false}>
              <ListAddField addIcon={<Icon icon="plus" />} />
              <Row>
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
                  label="Date"
                  model={props.model}
                  onChangeDate={props.changeDate}
                  field="date"
                />
              </Row>
            </NestField>
          </ListItemField>
        </ListField>
      </Col>
    </Row>
  </Container>
);

StartPre12WkAE.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default StartPre12WkAE;
