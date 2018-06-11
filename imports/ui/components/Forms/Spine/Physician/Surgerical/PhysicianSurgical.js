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

import getPhysicianSurgical from "../../../../../../api/Forms/Spine/Physician/Surgical/queries/getPhysicianSurgical.graphql";
import createPhysicianSurgical from "../../../../../../api/Forms/Spine/Physician/Surgical/mutations/createPhysicianSurgical.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/Surgical/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/Surgical/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import StartSurgical from "./StartSurgical";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class PhysicianSurgical extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["StartSurgical", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physicianSurgical &&
      !nextProps.data.physicianSurgical._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressForm = nextState.model;
      await this.handleSubmit(inProgressForm);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physicianSurgical, history, match) => {
    const notExistinginForm = !physicianSurgical._id;
    const newForm = _.omit(physicianSurgical, ["__typename"]);
    newForm.fixation = newForm.fixation.map(item => _.omit(item, "__typename"));
    newForm.vertebralSurgery = newForm.vertebralSurgery.map(item =>
      _.omit(item, "__typename")
    );
    console.log(newForm);
    try {
      const { data } = await this.props.createPhysicianSurgical({
        variables: { physicianSurgical: newForm }
      });
      const confirmation = notExistinginForm
        ? "Physician Surgical added!"
        : "Physician Surgical updated!";
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
      questionnaire.formId = data.createPhysicianSurgical._id;
      await this.props.updateQuestionnaire({
        variables: { questionnaire }
      });
      if (!notExistinginForm) {
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
      return {
        model: newModel
      };
    });
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.loading && !newProps.data.error) {
      this.setState({
        model: {
          ...newProps.data.physicianSurgical,
          vertebralSurgery: newProps.data.physicianSurgical
            .vertebralSurgery || [{}],
          fixation: newProps.data.physicianSurgical.fixation || [{}]
        }
      });
    }
  }

  render() {
    const {
      data: { loading, error, physicianSurgical }
    } = this.props;
    const components = {
      StartSurgical,
      Summary
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
        <h1>Physician Surgery form</h1>
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

PhysicianSurgical.defaultProps = {
  step: 0,
  model: {}
};

PhysicianSurgical.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getPhysicianSurgical, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createPhysicianSurgical, {
    name: "createPhysicianSurgical"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(PhysicianSurgical);
