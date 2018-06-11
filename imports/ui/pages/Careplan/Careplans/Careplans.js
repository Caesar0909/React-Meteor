import React from "react";
import PropTypes from "prop-types";
import { withApollo } from "react-apollo";

import CareplanSearch from "./CareplanSearch";
import Loading from "../../../components/Loading/Loading";
import "./Careplans.scss";

const Careplans = ({ loading, match, history }) =>
  loading ? (
    <Loading />
  ) : (
    <div className="row">
      <div className="col-sm-12">
        <div className="card card-transparent">
          <div className="card-header">
            <h2 className="card-title">Careplans</h2>
          </div>
          <CareplanSearch match={match} history={history} />
        </div>
      </div>
    </div>
  );

Careplans.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withApollo(Careplans);
