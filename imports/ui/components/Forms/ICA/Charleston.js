import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { BoolField } from "../../Input";

const Charleston = ({ model }) => (
  <Container>
    <Row>
      <h2>Charleston Co-morbidity Index</h2>
    </Row>
    <Row>
      <h3>
        {`Score: ${model.charleston ? model.charleston.score : ""} `}
        {` Probability: ${
          model.charleston ? model.charleston.probability : ""
        } `}
      </h3>
    </Row>
    <Row>
      <Col>
        <h5> 1 point </h5>
        <BoolField
          name="charleston.myocardialInfarction"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.congestiveHeartFailure"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.peripheralDisease"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.cvaWithMild"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.dementia"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.chronicPulmonary"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.connectiveTissue"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.pepticUlcer"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.mildLiver"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.diabetesWithoutEnd"
          inputClassName="check-success"
          showInlineError
        />
        <h5> 2 points </h5>
        <BoolField
          name="charleston.hemiplegia"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.moderateOrSevereRenal"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.diabetesWithEndOrganDamage"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.tumorWithoutMetastasis"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.leukemia"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.lymphoma"
          inputClassName="check-success"
          showInlineError
        />
        <h5> 3 points </h5>
        <BoolField
          name="charleston.moderateSevereLiver"
          inputClassName="check-success"
          showInlineError
        />
        <h5> 6 points </h5>
        <BoolField
          name="charleston.metastaticSolidTumor"
          inputClassName="check-success"
          showInlineError
        />
        <BoolField
          name="charleston.AIDS"
          inputClassName="check-success"
          showInlineError
        />
      </Col>
    </Row>
  </Container>
);

Charleston.propTypes = {
  model: PropTypes.object.isRequired,
  changeDate: PropTypes.func.isRequired
};

export default Charleston;
