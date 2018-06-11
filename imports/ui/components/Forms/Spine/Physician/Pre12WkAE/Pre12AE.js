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

const Pre12AE = props => (
  <Row>
    <Col>
      <DisplayIf
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
      </DisplayIf>
    </Col>
  </Row>
);

Pre12AE.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default Pre12AE;
