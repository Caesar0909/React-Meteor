import React from "react";
import { pure, compose } from "recompose";
import PropTypes from "prop-types";

import { graphql } from "react-apollo";

import {
  ButtonToolbar,
  ButtonGroup,
  Button,
  Container,
  Row,
  Col,
  Label
} from "reactstrap";
import questionnairesDueToday from "../../../api/Questionnaires/queries/countDueToday.graphql";
import questionnairesOverDue from "../../../api/Questionnaires/queries/OverDue.graphql";

const ClinicalForms = props => {
  return (
    <div className="widget-16 card no-border bg-white no-margin">
      <div className="card-header  top-left top-right ">
        <div className="card-title text-black hint-text">
        <span className="font-montserrat fs-11 all-caps">
          Clinical forms <i className="fa fa-chevron-right"/>
        </span>
        </div>
      </div>
      <div className="card-block p-t-40">
        <div className="row">
          <div className="col-6 p-r-10">
            <Row>
              <Col>
                <h4 className="no-margin p-b-5 text-success semi-bold pull-left">
                  Due today:
                </h4>
                <h4 className="no-margin p-b-5 text-success semi-bold pull-right">
                  {props.questionnairesDueToday.questionnairesDueToday
                    ? props.questionnairesDueToday.questionnairesDueToday.length
                    : ""}
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">ICA</p>
                <p className="pull-right bold">{
                  props.questionnairesDueToday.questionnairesDueToday
                    ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'InitialClinicalAssessment' ).length
                    : 'x'
                }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Surgerical</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'PhysicianSurgical' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Discharge</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'PhysicianDischarge' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Pre-12 Week AE</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'PhysicianPre12WkAE' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">3M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'Physician3MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">12M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'Physician12MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">24M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesDueToday.questionnairesDueToday
                      ? props.questionnairesDueToday.questionnairesDueToday.filter( a => a.type === 'Physician24MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
          </div>
          <div className="col-6 p-r-10">
            <Row>
              <Col>
                <h4 className="pull-left no-margin p-b-5 text-danger semi-bold">
                  Overdue:{" "}
                </h4>
                <h4 className="pull-right no-margin p-b-5 text-danger semi-bold">
                  {props.questionnairesOverDue.questionnairesOverDue
                    ? props.questionnairesOverDue.questionnairesOverDue.length
                    : ""}
                </h4>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">ICA</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'InitialClinicalAssessment' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Surgerical</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'PhysicianSurgical' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Discharge</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'PhysicianDischarge' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">Pre-12 Week AE</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'PhysicianPre12WkAE' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">3M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'Physician3MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">12M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'Physician12MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
            <Row>
              <Col>
                <p className="pull-left">24M FollowUp</p>
                <p className="pull-right bold">
                  {
                    props.questionnairesOverDue.questionnairesOverDue
                      ? props.questionnairesOverDue.questionnairesOverDue.filter( a => a.type === 'Physician24MonthFollowUp' ).length
                      : 'x'
                  }
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
}

export default compose(graphql(questionnairesDueToday, {name: 'questionnairesDueToday'}),
  graphql(questionnairesOverDue, {name: 'questionnairesOverDue'}), pure)(ClinicalForms);
