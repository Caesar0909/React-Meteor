import React from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";
import QuestionnaireEditor from "../../../components/Questionnaire/QuestionnaireEditor";
import NotFound from "../../NotFound/NotFound";
import getQuestionnaire from "../../../../api/Questionnaires/queries/getQuestionnaire.graphql";

const EditQuestionnaire = ({ questionnaire, history, userId, match }) =>
  questionnaire ? (
    <div className="EditQuestionnaire">
      <h4 className="page-header">{questionnaire.name}</h4>
      <QuestionnaireEditor
        questionnaire={questionnaire}
        history={history}
        match={match}
        userId={userId}
      />
    </div>
  ) : (
    <NotFound />
  );

EditQuestionnaire.defaultProps = {
  questionnaire: null
};

EditQuestionnaire.propTypes = {
  questionnaire: PropTypes.object,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default graphql(getQuestionnaire, {
  props: ({ data }) => ({ ...data }),
  options: ({ match }) => {
    const id = match ? match.params._id : "";
    return { variables: { id } };
  }
})(EditQuestionnaire);
