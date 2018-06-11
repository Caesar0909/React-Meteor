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

import getPhysicianGeneralAssessment from "../../../../../../api/Forms/Spine/Physician/GeneralAssessment/queries/getPhysicianGeneralAssessment.graphql";
import createPhysicianGeneralAssessment from "../../../../../../api/Forms/Spine/Physician/GeneralAssessment/mutations/createPhysicianGeneralAssessment.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/GeneralAssessment/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/GeneralAssessment/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import StartGeneralAssessment from "./StartGeneralAssessment";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class PhysicianGeneralAssessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["StartGeneralAssessment", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physicianGeneralAssessment &&
      !nextProps.data.physicianGeneralAssessment._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressICA = nextState.model;
      await this.handleSubmit(inProgressICA);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physicianGeneralAssessment, history, match) => {
    const notExistinginForm = !physicianGeneralAssessment._id;
    const newForm = _.omit(physicianGeneralAssessment, ["__typename"]);
    newForm.adverse_event = newForm.adverse_event.map(item =>
      _.omit(item, "__typename")
    );

    console.log(newForm);
    try {
      const { data } = await this.props.createPhysicianGeneralAssessment({
        variables: { physicianGeneralAssessment: newForm }
      });
      const confirmation = notExistinginForm
        ? "Physician General Assessment added!"
        : "Physician General Assessment updated!";
      if (!notExistinginForm) {
        Bert.alert(confirmation, "success");
      }
      const questionnaire = _.omit(this.props.questionnaire, [
        "__typename",
        "careplan",
        "patient",
        "initialInfo"
      ]);

      questionnaire.status = notExistinginForm ? IN_PROGRESS : COMPLETED;
      questionnaire.formId = data.createPhysicianGeneralAssessment._id;
      await this.props.updateQuestionnaire({
        variables: { questionnaire }
      });
      if (this.state.parts[this.state.step] === "Summary") {
        this.props.history.push(`/patients/${questionnaire.patientId}`);
      }
    } catch (error) {
      this.setState({
        error: true
      });
      Bert.alert(error.message, "danger");
    }
  };

  onChangeModel = model => {
    this.setState({ model });
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

  changeDate = ({ date, field, index }) => {
    this.setState(currentState => {
      const newModel = Object.assign({}, currentState.model);
      newModel.adverse_event[index][field] = date;
      return {
        model: newModel
      };
    });
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.loading && !newProps.data.error) {
      this.setState({
        model: {
          ...newProps.data.physicianGeneralAssessment,
          adverse_event: newProps.data.physicianGeneralAssessment
            .adverse_event || [{}]
        }
      });
    }
  }

  render() {
    const {
      data: { loading, error, physicianGeneralAssessment }
    } = this.props;
    const components = {
      StartGeneralAssessment,
      Summary
    };
    const LoadablePart = components[this.state.parts[this.state.step]];
    console.log(bridge);
    return loading ? (
      <Loading />
    ) : (
      <AutoForm
        schema={bridge}
        model={this.state.model}
        onChangeModel={this.onChangeModel}
        onSubmit={this.handleSubmit}
      >
        <h1>Physician General Assessment Form</h1>
        {LoadablePart ? (
          <LoadablePart
            model={this.state.model}
            schema={schema}
            changeDate={this.changeDate}
          />
        ) : (
          ""
        )}
        <WizardFooter
          changeStep={this.changeStep}
          step={this.state.step}
          nextButton={this.state.nextButton}
          submitPage={this.state.submitPage}
          disabled={this.state.model.status === COMPLETED}
        />
      </AutoForm>
    );
  }
}

PhysicianGeneralAssessment.defaultProps = {
  step: 0,
  model: {}
};

PhysicianGeneralAssessment.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getPhysicianGeneralAssessment, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createPhysicianGeneralAssessment, {
    name: "createPhysicianGeneralAssessment"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(PhysicianGeneralAssessment);
