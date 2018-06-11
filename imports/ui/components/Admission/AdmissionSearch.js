import React from "react";
import PropTypes from "prop-types";
import { withState, pure, compose } from "recompose";
import List from "./AdmissionList";

const filterState = withState("filter", "setFilter", "");

const AdmissionSearchPure = ({ filter, match, history }) => (
  <div>
    <List filter={filter} match={match} history={history} />
  </div>
);

AdmissionSearchPure.propTypes = {
  filter: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(filterState, pure)(AdmissionSearchPure);
