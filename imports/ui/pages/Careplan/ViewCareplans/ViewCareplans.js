import React from "react";
import { graphql, compose } from "react-apollo";
import PropTypes from "prop-types";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";
import NotFound from "../../NotFound/NotFound";
import careplansQuery from "../../../../api/Careplans/queries/careplans.graphql";

const ViewCareplans = props => {
  const careplans = props.careplansByPatient;
  return careplans && careplans.lenght > 0 ? (
    <Container>
      <div className="row">
        <div className="col-sm-12">
          {careplans[0].status}
          <Link
            className="btn btn-success"
            to={`/questionnaires/${careplans[0]._id}`}
          >
            Go to questionnaires
          </Link>
        </div>
      </div>
    </Container>
  ) : (
    <NotFound />
  );
};

ViewCareplans.propTypes = {
  careplansByPatient: PropTypes.array.isRequired
};

export default compose(
  graphql(careplansQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ patientId, match }) => {
      const id = match ? match.params.patientId : patientId;
      return {
        variables: { patientId: id },
        refetchQueries: [careplansQuery]
      };
    }
  })
)(ViewCareplans);
