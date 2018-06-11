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

import getPhysician3MonthFollowUp from "../../../../../../api/Forms/Spine/Physician/3MonthFollowUp/queries/getPhysician3MonthFP.graphql";
import createPhysician3MonthFollowUp from "../../../../../../api/Forms/Spine/Physician/3MonthFollowUp/mutations/createPhysician3MonthFollowUp.graphql";
import updateQuestionnaire from "../../../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../../../api/Forms/Spine/Physician/3MonthFollowUp/bridge";
import schema from "../../../../../../api/Forms/Spine/Physician/3MonthFollowUp/schema";
import { IN_PROGRESS, COMPLETED } from "../../../../../../Constants/Status";
import Start3MonthFP from "./Start3MonthFP";
import Summary from "../../../Summary";

import WizardFooter from "../../../WizardFooter/WizardFooter";
import Loading from "../../../../Loading/Loading";

class Physician3MonthFollowUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      nextButton: true,
      submitPage: false,
      parts: ["Start3MonthFP", "Summary"]
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.physician3MonthFollowUp &&
      !nextProps.data.physician3MonthFollowUp._id &&
      !nextState.model._id &&
      !this.state.error
    ) {
      const inProgressICA = nextState.model;
      await this.handleSubmit(inProgressICA);
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  handleSubmit = async (physician3MonthFollowUp, history, match) => {
    const notExistinginForm = !physician3MonthFollowUp._id;
    const newForm = _.omit(physician3MonthFollowUp, ["__typename"]);
    newForm.adverse_event = newForm.adverse_event.map(item =>
      _.omit(item, "__typename")
    );

    try {
      const { data } = await this.props.createPhysician3MonthFollowUp({
        variables: { physician3MonthFollowUp: newForm }
      });
      const confirmation = notExistinginForm
        ? "Physician 3 Month added!"
        : "Physician 3 Month updated!";
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
      questionnaire.formId = data.createPhysician3MonthFollowUp._id;
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
          ...newProps.data.physician3MonthFollowUp,
          adverse_event: newProps.data.physician3MonthFollowUp
            .adverse_event || [{}]
        }
      });
    }
  }

  render() {
    const { data: { loading, error, physician3MonthFollowUp } } = this.props;
    const components = {
      Start3MonthFP,
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
        <h1>Physician 3 Month Follow Up</h1>
        {LoadablePart ? (
          <LoadablePart
            model={this.state.model}
            schema={schema}
            changeDate={this.changeDate}
            questionnaire={this.props.questionnaire}
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

Physician3MonthFollowUp.defaultProps = {
  step: 0,
  model: {}
};

Physician3MonthFollowUp.propTypes = {
  model: PropTypes.object,
  step: PropTypes.number,
  data: PropTypes.object.isRequired
};

export default compose(
  graphql(getPhysician3MonthFollowUp, {
    options: ({ questionnaire }) => {
      const _id = questionnaire.formId ? questionnaire.formId : "";
      return {
        variables: { _id }
      };
    }
  }),

  graphql(createPhysician3MonthFollowUp, {
    name: "createPhysician3MonthFollowUp"
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(Physician3MonthFollowUp);
