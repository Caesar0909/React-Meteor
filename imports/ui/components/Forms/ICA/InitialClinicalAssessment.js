import React, { Component } from "react";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";
import _ from "lodash";
import { Bert } from "meteor/themeteorchef:bert";
import {
  AutoForm,
  SubmitField,
  DateField,
  TextField
} from "uniforms-bootstrap4";

import getICA from "../../../../api/Forms/initialClinicalAssessment/queries/getInitialClinicalAssessment.graphql";
import careplansQuery from "../../../../api/Careplans/queries/careplans.graphql";
import createInitialClinicalAssessment from "../../../../api/Forms/initialClinicalAssessment/mutations/createInitialClinicalAssessment.graphql";
import updateQuestionnaire from "../../../../api/Questionnaires/mutations/updateQuestionnaire.graphql";
import bridge from "../../../../api/Forms/initialClinicalAssessment/bridge";
import { IN_PROGRESS, COMPLETED } from "../../../../Constants/Status";
import StartICA from "./StartICA";
import Treatment from "./Treatment";
import Summary from "../Summary";
import schema from "../../../../api/Forms/initialClinicalAssessment/schema";
import AISS from "./AISS";
import Charleston from "./Charleston";
import Glasgow from "./Glasgow";
import Mechanism from "./Mechanism";
import WizardFooter from "../WizardFooter/WizardFooter";
import Loading from "../../Loading/Loading";
import icaRoutes from "../../../../api/Utility/icaRoutes";
import calculateAiss from "../../../../api/Forms/initialClinicalAssessment/modules/calculateScoreAiss";
import calculateGlasgow from "../../../../api/Forms/initialClinicalAssessment/modules/calculateScoreGlasgow";
import {
  calculateCharlestonScore,
  calculateCharlestonProbability
} from "../../../../api/Forms/initialClinicalAssessment/modules/calculateScoreCharleston";

class InitialClinicalAssessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {},
      step: 0,
      error: false,
      submitPage: false,
      nextButton: true,
      parts: icaRoutes({})
    };
  }

  async shouldComponentUpdate(nextProps, nextState) {
    if (
      !nextProps.data.loading &&
      nextProps.data.initialClinicalAssessment &&
      !nextProps.data.initialClinicalAssessment._id &&
      !nextState.model._id
    ) {
      const inProgressICA = nextState.model;
      if (this.state.step === 0) {
        await this.handleSubmit(inProgressICA);
      }
      return true;
    }
    return this.state !== nextState || this.props !== nextProps;
  }

  componentDidMount() {
    this.setState({ model: this.props.data.initialClinicalAssessment });
  }

  onChangeModel = model => {
    this.setState({
      model,
      parts: icaRoutes(model)
    });
  };

  onChange = (key, value) => {
    const newModel = { ...this.state.model };
    if (key === "spineUpperClinical") {
      newModel["spineLowerClinical"] = value;
      newModel["spineUpperAnatomic"] = value;
      newModel["spineLowerAnatomic"] = value;
    }
    if (key === "spineLowerClinical") {
      newModel["spineLowerAnatomic"] = value;
    }
    const keys = key.split(".");
    if (keys.length > 1) {
      if (!newModel[keys[0]]) {
        newModel[keys[0]] = {};
      }
      newModel[keys[0]][keys[1]] = value;
    } else {
      newModel[keys[0]] = value;
    }
    if (newModel.aiss) {
      const sum = calculateAiss(newModel);
      _.update(newModel, "aiss.score", function(originalValue) {
        return sum;
      });
    }
    if (newModel.glasgow) {
      const sum = calculateGlasgow(newModel);
      _.update(newModel, "glasgow.score", function(originalValue) {
        return sum;
      });
    }
    if (newModel.charleston) {
      const sum = calculateCharlestonScore({
        model: newModel,
        patient: this.props.questionnaire.patient
      });
      _.update(newModel, "charleston.score", function(originalValue) {
        return sum;
      });
      const probability = calculateCharlestonProbability({
        model: newModel
      });
      _.update(newModel, "charleston.probability", function(originalValue) {
        return probability;
      });
    }
    this.onChangeModel(newModel);
  };

  handleSubmit = async (initialClinicalAssessment, history, match) => {
    const notExistinginICA = !initialClinicalAssessment._id;
    const newIca = _.omit(initialClinicalAssessment, [
      "__typename",
      "aiss.__typename",
      "glasgow.__typename",
      "charleston.__typename",
      "mechanism.__typename"
    ]);

    console.log(newIca);
    try {
      const { data } = await this.props.createInitialClinicalAssessment({
        variables: { initialClinicalAssessment: newIca }
      });
      this.onChangeModel(data.createInitialClinicalAssessment);
      const confirmation = notExistinginICA ? "ICA added!" : "ICA updated!";
      if (!notExistinginICA) {
        Bert.alert(confirmation, "success");
      }
      const questionnaire = _.omit(this.props.questionnaire, [
        "__typename",
        "careplan",
        "patient",
        "initialInfo"
      ]);

      questionnaire.status = notExistinginICA ? IN_PROGRESS : COMPLETED;
      questionnaire.formId = data.createInitialClinicalAssessment._id;
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

  validate = (model, error, callback) => {
    this.setState({ nextButton: !error });
    return callback();
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
      Summary
    };
    const LoadablePart = components[this.state.parts[this.state.step]];
    return loading ? (
      <Loading />
    ) : (
      <AutoForm
        validate="onChange"
        onValidate={this.validate}
        schema={bridge}
        model={this.state.model}
        onChange={this.onChange}
        onSubmit={this.handleSubmit}
      >
        {LoadablePart ? (
          <LoadablePart
            model={this.state.model}
            changeDate={this.changeDate}
            schema={schema}
          />
        ) : (
          ""
        )}
        <WizardFooter
          changeStep={this.changeStep}
          step={this.state.step}
          nextButton={this.state.nextButton}
          submitPage={this.state.submitPage}
          disabled={initialClinicalAssessment.status === COMPLETED}
        />
        <style jsx="true">
          {`
            .error {
              color: inherit;
            }
          `}
        </style>
      </AutoForm>
    );
  }
}

InitialClinicalAssessment.defaultProps = {
  step: 0,
  model: {}
};

InitialClinicalAssessment.propTypes = {
  model: PropTypes.object,
  questionnaire: PropTypes.object.isRequired,
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
    options: props => {
      return {
        refetchQueries: [
          {
            query: careplansQuery,
            variables: { patientId: props.questionnaire.patientId }
          },
          {
            query: getICA,
            variables: {
              _id:
                props.data && props.data.initialClinicalAssessment
                  ? props.data.initialClinicalAssessment._id
                  : null
            }
          }
        ]
      };
    }
  }),
  graphql(updateQuestionnaire, {
    name: "updateQuestionnaire"
  })
)(InitialClinicalAssessment);
