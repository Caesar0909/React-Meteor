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

import getPhysician12MonthFollowUp from "../../../../../../api/Forms/Spine/Physician/12MonthFollowUp/queries/getPhysician12MonthFollowUp.graphql";
import createPhysician12MonthFollowUp from "../../../../../../api/Forms/Spine/Physician/12MonthFollowUp/mutations/createPhysician12MonthFollowUp.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/12MonthFollowUp/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/12MonthFollowUp/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import Start12MonthFP from "./Start12MonthFP";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class Physician12MonthFollowUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["Start12MonthFP", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physician12MonthFollowUp &&
      !nextProps.data.physician12MonthFollowUp._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressForm = nextState.model;
      await this.handleSubmit(inProgressForm);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physician12MonthFollowUp, history, match) => {
    const notExistinginForm = !physician12MonthFollowUp._id;
    const newForm = _.omit(physician12MonthFollowUp, ["__typename"]);
    newForm.adverse_event = newForm.adverse_event.map(item =>
      _.omit(item, "__typename")
    );

    console.log(newForm);
    try {
      const { data } = await this.props.createPhysician12MonthFollowUp({
        variables: { physician12MonthFollowUp: newForm }
      });
      const confirmation = notExistinginForm
        ? "Physician 12 Month added!"
        : "Physician 12 Month updated!";
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
      questionnaire.formId = data.createPhysician12MonthFollowUp._id;
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
      this.setState({
        model: {
          ...newProps.data.physician12MonthFollowUp,
          adverse_event: newProps.data.physician12MonthFollowUp
            .adverse_event || [{}]
        }
      });
    }
  }

  render() {
    const { data: { loading, error, physician12MonthFollowUp } } = this.props;
    const components = {
      Start12MonthFP,
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
        <h1>Physician 12 Month Follow Up</h1>
        {LoadablePart ? (
          <LoadablePart model={this.state.model} schema={schema} questionnaire={this.props.questionnaire}/>
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
  graphql(getPhysician12MonthFollowUp, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),
  graphql(createPhysician12MonthFollowUp, {
    name: "createPhysician12MonthFollowUp"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(Physician12MonthFollowUp);
