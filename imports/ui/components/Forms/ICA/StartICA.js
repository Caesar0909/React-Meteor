import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { LongTextField } from "uniforms-bootstrap4";
import { RadioField, SelectField, BoolField } from "../../Input";
import DisplayIf from "../DisplayIf";
import DateCustom from "../DateCustom";

const StartICA = ({ model, changeDate }) => (
  <Container>
    <Row>
      <h2>Part 1: Initial Clinical Assessment</h2>
    </Row>
    <Row>
      <Col>
        <DateCustom
          label="Referral date"
          model={model}
          onChangeDate={changeDate}
          field="dateInitialReferral"
          name="dateInitialReferral"
        />
      </Col>
      <Col>
        <DateCustom
          label="Initial visit date"
          model={model}
          onChangeDate={changeDate}
          field="dateFirstVisit"
          name="dateFirstVisit"
        />
      </Col>
      <Col>
        <DateCustom
          label="Assessment date"
          model={model}
          onChangeDate={changeDate}
          field="initialCurrentDate"
          name="initialCurrentDate"
        />
      </Col>
      <Col>
        <DateCustom
          label="Informed Consent date"
          model={model}
          onChangeDate={changeDate}
          field="dateConsentSigned"
          name="dateConsentSigned"
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <RadioField
          name="CA1A"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <DisplayIf condition={context => context.model.CA1A === "Myelopathy"}>
        <Col>
          <RadioField
            name="myleopathyNurick"
            inputClassName="radio radio-success"
            showInlineError
          />
        </Col>
      </DisplayIf>
      <Col>
        <SelectField
          name="CA1B"
          inputClassName="checkbox check-success"
          showInlineError
        />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <RadioField
          name="CA2"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
    </Row>
    <hr />
    <Row>
      <Col>
        <RadioField
          name="CA3"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <DisplayIf condition={context => context.model.CA3 === "Yes"}>
        <Row>
          <Col>
            <RadioField
              name="initialCA4A"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="initialCA4B"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="initialCA4C"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
          <Col>
            <RadioField
              name="initialCA4D"
              inputClassName="radio radio-success"
              showInlineError
            />
          </Col>
        </Row>
      </DisplayIf>
    </Row>
    <hr />
    <Row>
      <Col>
        <SelectField
          name="spineUpperClinical"
          placeholder="Select"
          showInlineError
        />
      </Col>
      <Col>
        <SelectField
          name="spineLowerClinical"
          placeholder="Select"
          showInlineError
        />
      </Col>
      <Col>
        <SelectField
          name="spineUpperAnatomic"
          placeholder="Select"
          showInlineError
        />
      </Col>
      <Col>
        <SelectField
          name="spineLowerAnatomic"
          placeholder="Select"
          showInlineError
        />
      </Col>
    </Row>
    <hr />
    <Row>
      <h2>Part 2: Principal Pathology</h2>
    </Row>
    <Row>
      <Col>
        <RadioField
          name="PP1"
          inputClassName="radio radio-success"
          showInlineError
        />
      </Col>
      <DisplayIf condition={context => context.model.PP1 === "1"}>
        <Col>
          <RadioField
            name="PPDegenerative"
            inputClassName="radio radio-success"
            showInlineError
          />
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "3"}>
        <Col>
          <SelectField name="PPSpondylolisthesis" showInlineError />
          <SelectField name="TypeSpondStenosis" showInlineError />
          <SelectField name="PPSpondylolisthesisGrade" showInlineError />
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "4"}>
        <Col>
          <SelectField name="PPDeformity" showInlineError />

          <DisplayIf
            condition={context => context.model.PPDeformity === "Scoliosis"}
          >
            <SelectField name="PPDeformScoliosis" showInlineError />
          </DisplayIf>
          <DisplayIf
            condition={context => context.model.PPDeformity === "Scoliosis"}
          >
            <BoolField
              name="DegenScolStenosis"
              inputClassName="check-success"
              showInlineError
            />
          </DisplayIf>
          <DisplayIf
            condition={context => context.model.PPDeformity === "Kyphosis"}
          >
            <SelectField name="PPDeformKyphosis" showInlineError />
          </DisplayIf>
          <DisplayIf
            condition={context => context.model.PPDeformity === "Other"}
          >
            <SelectField name="PPDeformKyphosis" showInlineError />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "5"}>
        <Col>
          <RadioField
            name="PPTraumaticFracture"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context =>
              context.model.PPTraumaticFracture === "C2_dens_fracture"
            }
          >
            <RadioField
              name="PPTraumaticFractureC2dens"
              inputClassName="radio radio-success"
              showInlineError
            />
          </DisplayIf>
          <DisplayIf
            condition={context =>
              context.model.PPTraumaticFracture === "Fracture C3-L5"
            }
          >
            <RadioField
              name="PPTraumaticFractureC3L5"
              inputClassName="radio radio-success"
              showInlineError
            />
          </DisplayIf>
          <DisplayIf
            condition={context => context.model.PPTraumaticFracture === "Other"}
          >
            <LongTextField name="PPTraumaticFractureOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "6"}>
        <Col>
          <RadioField
            name="PPPathFracture"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPPathFracture === "Tumour"}
          >
            <RadioField
              name="PPPathFractureTumourType"
              inputClassName="radio radio-success"
              showInlineError
            />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "7"}>
        <Col>
          <RadioField
            name="PPTumourType"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPTumourType === "Other"}
          >
            <LongTextField name="PPTumourTypeOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "8"}>
        <Col>
          <RadioField
            name="PPInflammationType"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPInflammationType === "Other"}
          >
            <LongTextField name="PPInflammationTypeOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "9"}>
        <Col>
          <RadioField
            name="PPInfection"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPInfection === "Other"}
          >
            <LongTextField name="PPInfectionOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "10"}>
        <Col>
          <RadioField
            name="PPIntradural"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPIntradural === "Other"}
          >
            <LongTextField name="PPIntraduralOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "11"}>
        <Col>
          <RadioField
            name="PPVascular"
            inputClassName="radio radio-success"
            showInlineError
          />
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "12"}>
        <Col>
          <LongTextField name="PPOther" />
        </Col>
      </DisplayIf>
      <DisplayIf condition={context => context.model.PP1 === "13"}>
        <Col>
          <RadioField
            name="PPIntradural"
            inputClassName="radio radio-success"
            showInlineError
          />
          <DisplayIf
            condition={context => context.model.PPIntradural === "Other"}
          >
            <LongTextField name="PPIntraduralOther" />
          </DisplayIf>
        </Col>
      </DisplayIf>
    </Row>
    <hr />
    <Row>
      <h2>Part 3: Previous surgery</h2>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="NoPreviousSurgery"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
    </Row>
    <DisplayIf condition={context => context.model.NoPreviousSurgery}>
      <Row>
        <Col>
          <SelectField
            name="PS1"
            inputClassName="checkbox check-success"
            showInlineError
          />
        </Col>
        <Col>
          <RadioField
            name="PS2"
            inputClassName="radio radio-success"
            showInlineError
          />
        </Col>
        <Col>
          <BoolField
            name="PS3"
            inputClassName="check-success"
            showInlineError
          />
        </Col>
      </Row>
    </DisplayIf>
    <Row>
      <h2>Part 3B: Complete only if surgery is recommended</h2>
    </Row>
    <Row>
      <Col>
        <BoolField
          name="PS4NoFailedSurgery"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
    </Row>
    <DisplayIf condition={context => context.model.PS4NoFailedSurgery}>
      <Row>
        <Col>
          <SelectField
            name="PS4"
            inputClassName="checkbox check-success"
            showInlineError
          />
        </Col>
      </Row>
    </DisplayIf>
  </Container>
);

StartICA.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default StartICA;
