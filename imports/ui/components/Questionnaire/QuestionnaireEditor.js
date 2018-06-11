import React, { Component } from "react";
import PropTypes from "prop-types";
import { Bert } from "meteor/themeteorchef:bert";
import gql from "graphql-tag";
import { compose, graphql } from "react-apollo";
import path from "path";

import InitialClinicalAssessment from "../Forms/ICA/InitialClinicalAssessment";
import Physician3MonthFollowUp from "../Forms/Spine/Physician/3MonthFollowUp/Physician3MonthFollowUp";
import Physician12MonthFollowUp from "../Forms/Spine/Physician/12MonthFollowUp/Physician12MonthFollowUp";
import Physician24MonthFollowUp from "../Forms/Spine/Physician/24MonthFollowUp/Physician24MonthFollowUp";
import PhysicianPre12WkAE from "../Forms/Spine/Physician/Pre12WkAE/PhysicianPre12WkAE";
import PhysicianSurgical from "../Forms/Spine/Physician/Surgerical/PhysicianSurgical";
import PhysicianDischarge from "../../components/Forms/Spine/Physician/Discharge/PhysicianDischarge";
import Loading from "../../../ui/components/Loading/Loading";
import AdmissionForm from "./../Admission/AdmissionForm";
import admissionQuery from "../../../api/Admissions/queries/admission.graphql";
import admissions from "../../../api/Admissions/queries/admissions.graphql";
import GetLocations from "../../../api/Locations/queries/getLocations.graphql";
import patientSearchQuery from "../../../api/Patients/queries/patientSearchQuery.graphql";

class QuestionnaireEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  render() {
    const { questionnaire, history, userId, match } = this.props;
    const components = {
      InitialClinicalAssessment,
      Physician3MonthFollowUp,
      Physician12MonthFollowUp,
      Physician24MonthFollowUp,
      PhysicianPre12WkAE,
      PhysicianSurgical,
      PhysicianDischarge
    };
    const LoadableForm = components[questionnaire.type];
    return (
      <div className="questionnaireEditor">
        {LoadableForm && (
          <LoadableForm
            questionnaire={questionnaire}
            step={this.state.step}
            onChangeStep={this.changeStep}
            onSubmitSuccess={() => alert("Promise resolved!")}
            history={history}
            onValidate={this.onValidate}
            userId={userId}
            validate="onChangeAfterSubmit"
          />
        )}
        <style jsx="true">
          {`
            .questionnaireEditor {
              margin-bottom: 100px;
            }
          `}
        </style>
      </div>
    );
  }
}

QuestionnaireEditor.defaultProps = {
  admission: null
};

QuestionnaireEditor.propTypes = {
  admission: PropTypes.object,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default QuestionnaireEditor;
