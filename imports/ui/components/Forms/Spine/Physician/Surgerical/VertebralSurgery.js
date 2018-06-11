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

const VertebralSurgery = props => (
  <Row>
    <Col>
      <h1> Hi </h1>

      <DisplayIf
        condition={context => context.model.vertebralSurgery instanceof Array}
      >
        <ListField
          name="vertebralSurgery"
          removeIcon={<Icon icon="minus" />}
          disable={false}
        >
          <ListItemField name="$" disable={false}>
            <NestField disable={false}>
              <ListAddField addIcon={<Icon icon="plus" />} />
              <Row all={props}>
                <SelectField
                  name="surgeryType"
                  placeholder="Select"
                  checkboxes={false}
                  showInlineError
                />

                <SelectField
                  name="approach"
                  placeholder="Select"
                  showInlineError
                  checkboxes={true}
                />
                <SelectField
                  name="additional"
                  placeholder="Select"
                  showInlineError
                  checkboxes={true}
                />
                <SelectField
                  name="upper"
                  placeholder="Select"
                  checkboxes={false}
                  showInlineError
                />
                <SelectField
                  name="lower"
                  placeholder="Select"
                  checkboxes={false}
                  showInlineError
                />
              </Row>
            </NestField>
          </ListItemField>
        </ListField>
      </DisplayIf>
    </Col>
  </Row>
);

VertebralSurgery.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default VertebralSurgery;
