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

import getPhysicianPre12WkAE from "../../../../../../api/Forms/Spine/Physician/Pre12WkAE/queries/getPhysicianPre12WkAE.graphql";
import createPhysicianPre12WkAE from "../../../../../../api/Forms/Spine/Physician/Pre12WkAE/mutations/createPhysicianPre12WkAE.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/Pre12WkAE/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/Pre12WkAE/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import StartPre12WkAE from "./StartPre12WkAE";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class PhysicianPre12WkAE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["StartPre12WkAE", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physicianPre12WkAE &&
      !nextProps.data.physicianPre12WkAE._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressForm = nextState.model;
      await this.handleSubmit(inProgressForm);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physicianPre12WkAE, history, match) => {
    const notExistinginForm = !physicianPre12WkAE._id;
    const newForm = _.omit(physicianPre12WkAE, ["__typename"]);

    console.log(newForm);
    try {
      const { data } = await this.props.createPhysicianPre12WkAE({
        variables: { physicianPre12WkAE: newForm }
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
      questionnaire.formId = data.createPhysicianPre12WkAE._id;
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
          ...newProps.data.physicianPre12WkAE,
          adverse_event: newProps.data.physicianPre12WkAE
            ? newProps.data.physicianPre12WkAE.adverse_event
            : [{}]
        }
      });
    }
  }

  render() {
    const {
      data: { loading, error, physicianPre12WkAE }
    } = this.props;
    const components = {
      StartPre12WkAE,
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
        <h1>Physician Pre 12 Week Adverse Event</h1>
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

PhysicianPre12WkAE.defaultProps = {
  step: 0,
  model: {}
};

PhysicianPre12WkAE.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getPhysicianPre12WkAE, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createPhysicianPre12WkAE, {
    name: "createPhysicianPre12WkAE"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(PhysicianPre12WkAE);
