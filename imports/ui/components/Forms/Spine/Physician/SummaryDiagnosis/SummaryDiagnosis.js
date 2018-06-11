import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

const SummaryDiagnosis = props => {
  console.log (props);
  let owner = Meteor.users.findOne({_id: props.questionnaire.owner});
  return (
    <Row>
      <Col>
        <div className="card">
          <div className="card-header">
            <h2 className="card-title">Summary Diagnosis</h2>
            <p> Diagnosed by: {owner.profile.name.first + " " + owner.profile.name.last}</p>
            <p> Diagnosis date: {props.questionnaire.dueDate}</p>
            <p> Pathology : {props.questionnaire.initialInfo.PP1}</p>
            <p> Upper/Lower clinical levels : {props.questionnaire.initialInfo.spineUpperClinical}/{props.questionnaire.initialInfo.spineLowerClinical}</p>
            <p> Clinical category</p>
            <p> Neurological deficit : {'' +props.questionnaire.initialInfo.CA3}</p>
            <p> Treatment : {props.questionnaire.initialInfo.treatmentType}</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

SummaryDiagnosis.propTypes = {
  questionnaire: PropTypes.object.isRequired,
};

export default SummaryDiagnosis;
