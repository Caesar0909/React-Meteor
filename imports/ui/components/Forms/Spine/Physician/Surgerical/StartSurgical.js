import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import {
  ListField,
  ListItemField,
  ListAddField,
  NestField,
  NumField
} from "uniforms-bootstrap4";
import { SelectField, SelectArray, BoolField } from "../../../../Input";
import DisplayIf from "../../../DisplayIf";
import DateCustom from "../../../DateCustom";
import Icon from "../../../../Icon/Icon";
import TextField from "uniforms-bootstrap4/TextField";
import SummaryDiagnosis from "../SummaryDiagnosis/SummaryDiagnosis";

const StartSurgical = ({ model, changeDate }) => (
  <Container>
    {/* <SummaryDiagnosis questionnaire={props.questionnaire} /> */}
    <Row>
      <Col>
        <DateCustom
          label="Initial referral date"
          model={model}
          onChangeDate={changeDate}
          field="DateInitialReferral"
        />
      </Col>
      <Col>
        <DateCustom
          label="Date of surgery"
          model={model}
          onChangeDate={changeDate}
          field="surg_proc_surg_dt"
        />
      </Col>
      <Col>
        <DateCustom
          label="Operating Time start"
          model={model}
          onChangeDate={changeDate}
          field="surg_proc_optimestart"
        />
      </Col>
      <Col>
        <DateCustom
          label="Operating Time end"
          model={model}
          onChangeDate={changeDate}
          field="surg_proc_optimeend"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <NumField
          name="surg_proc_asascore"
          min={1}
          max={5}
          step={1}
          showInlineError
        />
      </Col>
      <Col>
        <NumField name="surg_proc_estimatedbloodloss" />
      </Col>
      <Col>
        <DateCustom
          label="Date of Injury"
          model={model}
          onChangeDate={changeDate}
          field="surg_proc_injury_dt"
        />
      </Col>
      <Col>
        <DateCustom
          label="Date of Decompression (SCI patients)"
          model={model}
          onChangeDate={changeDate}
          field="surg_proc_decomp_dt"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="vertebral"
          inputClassName="check-success"
          showInlineError
        />
        <Row>
          <DisplayIf condition={context => context.model.vertebral}>
            <ListField
              name="vertebralSurgery"
              removeIcon={<Icon icon="minus" />}
              disable={false}
            >
              <ListItemField name="$" disable={false}>
                <NestField disable={false}>
                  <ListAddField addIcon={<Icon icon="plus" />} />
                  <Row>
                    <SelectField
                      name="surgeryType"
                      placeholder="Select"
                      checkboxes={false}
                      showInlineError
                      className="col"
                    />

                    <SelectField
                      name="approach"
                      placeholder="Select"
                      showInlineError
                      checkboxes={false}
                      className="col"
                    />

                    <SelectField
                      name="additional"
                      placeholder="Select"
                      showInlineError
                      checkboxes={false}
                      className="col"
                    />
                    <SelectField name="upper" placeholder="" className="col" />
                    <SelectField name="lower" placeholder="" className="col" />
                  </Row>
                </NestField>
              </ListItemField>
            </ListField>
          </DisplayIf>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="fixation_fusion"
          inputClassName="check-success"
          showInlineError
        />
        <Row>
          <DisplayIf condition={context => context.model.fixation_fusion}>
            <ListField
              name="fixation"
              removeIcon={<Icon icon="minus" />}
              disable={false}
            >
              <ListItemField name="$" disable={false}>
                <NestField disable={false}>
                  <ListAddField addIcon={<Icon icon="plus" />} />
                  <Row>
                    <SelectField
                      name="device"
                      placeholder="Select"
                      checkboxes={false}
                      showInlineError
                      className="col"
                    />

                    <SelectField
                      name="approach"
                      placeholder="Select"
                      showInlineError
                      checkboxes={false}
                      className="col"
                    />

                    <SelectField name="upper" placeholder="" className="col" />

                    <SelectField name="lower" placeholder="" className="col" />
                  </Row>
                </NestField>
              </ListItemField>
            </ListField>
          </DisplayIf>
        </Row>
      </Col>
      <DisplayIf condition={context => context.model.fixation_fusion}>
        <Row>
          <Col>
            <NestField name="fixation" />
          </Col>
        </Row>
      </DisplayIf>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="fusionBoneGraft"
          inputClassName="check-success"
          showInlineError
        />
        <DisplayIf condition={context => context.model.fusionBoneGraft}>
          <Row>
            <Col>
              <NestField name="autograft">
                <SelectField name="type" />
              </NestField>
            </Col>
            <Col>
              <NestField name="allograft">
                <SelectField name="type" />
              </NestField>
            </Col>
            <Col>
              <NestField name="synthetics">
                <SelectField name="type" />
              </NestField>
            </Col>
          </Row>
        </DisplayIf>
      </Col>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="adjunctive"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
    </Row>

    <DisplayIf condition={context => context.model.adjunctive}>
      <Row>
        <Col>
          <NestField name="intraoperativeMonitoring">
            <SelectField name="type" />
          </NestField>
        </Col>
        <Col>
          <NestField name="intraoperativeImaging">
            <SelectField name="type" />
          </NestField>
        </Col>
        <Col>
          <NestField name="navigation">
            <BoolField
              name="type"
              inputClassName="check-success"
              showInlineError
            />
          </NestField>
        </Col>
      </Row>
    </DisplayIf>
    <Row>
      <Col>
        <BoolField
          name="otherProcedure"
          inputClassName="check-success"
          showInlineError
        />
        <DisplayIf condition={context => context.model.otherProcedure}>
          <Row>
            <Col>
              <NestField name="cord">
                <SelectField name="type" />
              </NestField>
            </Col>
            <Col>
              <NestField name="pumps">
                <SelectField name="type" />
              </NestField>
            </Col>
            <Col>
              <NestField name="drainage">
                <SelectField name="type" />
              </NestField>
            </Col>
          </Row>
        </DisplayIf>
      </Col>
    </Row>
  </Container>
);

StartSurgical.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default StartSurgical;
