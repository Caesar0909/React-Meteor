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

import getPhysicianDischarge from "../../../../../../api/Forms/Spine/Physician/Discharge/queries/getPhysicianDischarge.graphql";
import createPhysicianDischarge from "../../../../../../api/Forms/Spine/Physician/Discharge/mutations/createPhysicianDischarge.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/Discharge/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/Discharge/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import StartDischarge from "./StartDischarge";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class PhysicianDischarge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["StartDischarge", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physicianDischarge &&
      !nextProps.data.physicianDischarge._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressForm = nextState.model;
      await this.handleSubmit(inProgressForm);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physicianDischarge, history, match) => {
    const notExistinginForm = !physicianDischarge._id;
    const newForm = _.omit(physicianDischarge, ["__typename"]);
    newForm.adverse_event = newForm.adverse_event.map(item =>
      _.omit(item, "__typename")
    );
    console.log(newForm);
    try {
      const { data } = await this.props.createPhysicianDischarge({
        variables: { physicianDischarge: newForm }
      });
      const confirmation = notExistinginForm
        ? "Physician 24 Month added!"
        : "Physician 24 Month updated!";
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
      questionnaire.formId = data.createPhysicianDischarge._id;
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
      newModel.adverse_event[index][field] = date.toDate();
      return {
        model: newModel
      };
    });
  };

  componentWillReceiveProps(newProps) {
    if (!newProps.data.loading && !newProps.data.error) {
      this.setState({
        model: {
          ...newProps.data.physicianDischarge,
          adverse_event: newProps.data.physicianDischarge.adverse_event || [{}]
        }
      });
    }
  }

  render() {
    const { data: { loading, error, physicianDischarge } } = this.props;
    const components = {
      StartDischarge,
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
        <h1>Physician Discharge</h1>
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

PhysicianDischarge.defaultProps = {
  step: 0,
  model: {}
};

PhysicianDischarge.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getPhysicianDischarge, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createPhysicianDischarge, {
    name: "createPhysicianDischarge"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(PhysicianDischarge);
