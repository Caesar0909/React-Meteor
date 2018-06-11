import React from "react";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";
import { Link } from "react-router-dom";

import PatientSearch from "./PatientSearch";
import Loading from "../../../components/Loading/Loading";
import "./Patients.scss";

const Patients = ({ loading, match, history }) =>
  !loading ? (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-transparent">
          <div className="card-header">
            <h2 className="card-title">Patients</h2>
            <Link
              className="btn btn-success pull-right"
              to={`${match.url}/new`}
            >
              Add Patient
            </Link>
          </div>
          <PatientSearch match={match} history={history} />
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );

Patients.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withApollo(Patients);
