import React from "react";
import PropTypes from "prop-types";
import { withState, pure, compose } from "recompose";
import List from "./AppointmentList";

const filterState = withState("filter", "setFilter", "");

const AppointmentSearchPure = ({ filter, match, history }) => (
  <div>
    <List filter={filter} match={match} history={history} />
  </div>
);

AppointmentSearchPure.propTypes = {
  filter: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(filterState, pure)(AppointmentSearchPure);
