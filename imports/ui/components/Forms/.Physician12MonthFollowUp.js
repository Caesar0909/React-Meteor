import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";
import { Bert } from "meteor/themeteorchef:bert";
import {
  AutoForm,
  SubmitField,
  DateField,
  TextField
} from "uniforms-bootstrap4";

import getPhysician12MonthFollowUp from "../../../api/Forms/Spine/Physician/12MonthFollowUp/queries/getPhysician12MonthFollowUp.graphql";
import createPhysician12MonthFollowUp from "../../../api/Forms/Spine/Physician/12MonthFollowUp/mutations/createPhysician12MonthFollowUp.graphql";
import updateQuestionnaire from "../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../api/Forms/Spine/Physician/12MonthFollowUp/bridge";
import { IN_PROGRESS, COMPLETED } from "../../../Constants/Status";
import WizardFooter from "./WizardFooter/WizardFooter";
import Loading from "../Loading/Loading";
import icaRoutes from "../../../api/Utility/icaRoutes";

class Physician12MonthFollowUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      submitPage: false,
      parts: icaRoutes({})
    };
    if (this.props.data.initialClinicalAssessment) {
      this.props.data.refetch();
    }
  }

  onChangeModel = model => {
    this.setState({ model });
    if (this.state.step === 0) {
      this.setState(currentState => {
        parts: icaRoutes(model);
      });
    }
  };

  handleSubmit = async (initialClinicalAssessment, history, match) => {
    const notExistinginICA = !initialClinicalAssessment._id;
    const newIca = Object.assign({}, initialClinicalAssessment);
    delete newIca.__typename;
    console.log(newIca);
    try {
      const { data } = await this.props.createInitialClinicalAssessment({
        variables: { initialClinicalAssessment: newIca }
      });
      const confirmation = notExistinginICA ? "ICA added!" : "ICA updated!";
      Bert.alert(confirmation, "success");
      const {
        careplan,
        patient,
        __typename,
        ...questionnaire
      } = this.props.questionnaire;
      questionnaire.status = notExistinginICA ? IN_PROGRESS : COMPLETED;
      questionnaire.formId = data.createInitialClinicalAssessment._id;
      await this.props.updateQuestionnaire({
        variables: { questionnaire }
      });
      this.setState({
        model: data.createInitialClinicalAssessment
      });
      if (!notExistinginICA) {
        this.props.history.push(`/careplans/${questionnaire.careplanId}`);
      }
    } catch (error) {
      Bert.alert(error.message, "danger");
    }
  };

  changeStep = number => {
    this.setState(currentState => {
      currentPage = currentState.step + number;
      return {
        step: currentPage,
        submitPage: currentState.parts.length - 1 === currentPage
      };
    });
  };

  changeDate = ({ date, field }) => {
    this.setState(currentState => {
      const newModel = Object.assign({}, currentState.model);
      newModel[field] = date.toDate();
      return {
        model: newModel
      };
    });
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.loading && !newProps.data.error) {
      this.setState({ model: newProps.data.initialClinicalAssessment });
    }
  }

  render() {
    const { data: { loading, error, initialClinicalAssessment } } = this.props;
    const components = {
      StartICA,
      Charleston,
      Glasgow,
      AISS,
      Mechanism,
      Treatment,
      SummaryICA
    };
    const LoadablePart = components[this.state.parts[this.state.step]];
    return loading ? (
      <Loading />
    ) : (
      <AutoForm
        schema={bridge}
        model={this.state.model}
        onChangeModel={this.onChangeModel}
        onSubmit={this.handleSubmit}
      >
        <h1>Physician12MonthFollowUp</h1>
        {/* FORM HERE */}
        <WizardFooter
          changeStep={this.changeStep}
          step={this.state.step}
          submitPage={this.state.submitPage}
          disabled={this.state.model.status === COMPLETED}
        />
      </AutoForm>
    );
  }
}

Physician12MonthFollowUp.defaultProps = {
  step: 0,
  model: {}
};

Physician12MonthFollowUp.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getICA, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createInitialClinicalAssessment, {
    name: "createInitialClinicalAssessment",
    options: ({ questionnaire }) => {
      return {
        refetchQueries: [
          {
            query: careplanQuery,
            variables: { _id: questionnaire.careplanId }
          }
        ]
      };
    }
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(Physician12MonthFollowUp);
