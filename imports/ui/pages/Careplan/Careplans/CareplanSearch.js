import React from "react";
import PropTypes from "prop-types";
import { withState, pure, compose } from "recompose";
import { graphql } from "react-apollo";
import { Alert, Input } from "reactstrap";

import careplansSearchQuery from "../../../../api/Careplans/queries/careplansSearchQuery.graphql";
import CareplansTable from "../../../components/Careplans/CareplansTable";
import Loading from "../../../components/Loading/Loading";

import "./Careplans.scss";

const CareplanListPure = ({
  data: { loading, careplansFiltered },
  match,
  history
}) =>
  loading ? (
    <Loading />
  ) : (
    <div className="card-block">
      {careplansFiltered ? (
        <CareplansTable careplans={careplansFiltered} />
      ) : (
        <Alert color="warning">No careplans yet!</Alert>
      )}
    </div>
  );

const data = graphql(careplansSearchQuery, {
  options: props => ({
    variables: {
      filter: props.filter
    }
  })
});

CareplanListPure.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const CareplanList = compose(data, pure)(CareplanListPure);

const states = withState("filter", "setFilter", "");

const CareplanSearch = ({ filter, setFilter, match, history }) => (
  <div>
    {/* <div>
      <Input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div> */}
    <CareplanList
      filter={filter}
      // limit={limit}
      // skip={skip}
      match={match}
      history={history}
    />
  </div>
);

CareplanSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(states, pure)(CareplanSearch);
