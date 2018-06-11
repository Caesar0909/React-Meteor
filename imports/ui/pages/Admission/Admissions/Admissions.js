import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import Loading from "../../../components/Loading/Loading";
import Search from "../../../components/Admission/AdmissionSearch";
import { Card, CardHeader } from "../../../components/Card";

const Admissions = ({ loading, match, history }) =>
  !loading ? (
    <div className="row">
      <div className="col-sm-12">
        <Card>
          <CardHeader title="Admission">
            <Link
              className="btn btn-success pull-right"
              to={`${match.url}/new`}
            >
              Add Admission
            </Link>
          </CardHeader>
          <Search match={match} history={history} />
        </Card>
      </div>
    </div>
  ) : (
    <Loading />
  );

Admissions.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withApollo(Admissions);
