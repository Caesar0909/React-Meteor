import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import { Container, Alert } from "reactstrap";
import { Card, CardHeader } from "../../../components/Card";
import Loading from "../../../components/Loading/Loading";
import QuestionnaireCard from "../../../components/Questionnaire/QuestionnaireCard";

import careplanQuery from "../../../../api/Careplans/queries/careplan.graphql";

const ViewCareplan = ({ loading, careplan, match, history }) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      {careplan ? (
        <div className="row">
          <div className="col-sm-12">
            <Card>
              <CardHeader
                title={`Careplan for ${careplan.patient.firstName} ${
                  careplan.patient.lastName
                }`}
              />
              {careplan.questionnaires.map(item => (
                <QuestionnaireCard key={item._id} questionnaire={item} />
              ))}
            </Card>
          </div>
        </div>
      ) : (
        <Alert color="warning">No careplan found!</Alert>
      )}
    </Container>
  );

ViewCareplan.propTypes = {
  loading: PropTypes.bool.isRequired,
  careplan: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default compose(
  graphql(careplanQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ match }) => {
      const id = match ? match.params._id : null;
      return {
        variables: { _id: id },
        refetchQueries: [careplanQuery]
      };
    }
  })
)(ViewCareplan);
