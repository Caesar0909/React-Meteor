import React from "react";
import PropTypes from "prop-types";
import { withState, pure, compose } from "recompose";
import { graphql } from "react-apollo";
import { Table, Alert, Button, Input, Label } from "reactstrap";

import patientSearchQuery from "../../../../api/Patients/queries/patientSearchQuery.graphql";
import Loading from "../../../components/Loading/Loading";
import DeletePatient from "../../../components/Patients/DeletePatient";
import "./Patients.scss";

const PatientListPure = ({ data: { loading, patients }, match, history }) =>
  loading ? (
    <Loading />
  ) : (
    <div className="card-block">
      {patients && patients.length > 0 ? (
        <Table responsive className="table-striped table-condensed">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(({ _id, firstName, lastName, email, isActive }) => (
              <tr key={_id}>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{email}</td>
                <td>
                  {isActive ? (
                    <Label color="success" className="m-b-0">
                      Active
                    </Label>
                  ) : (
                    <Label color="danger" className="m-b-0">
                      Discharged
                    </Label>
                  )}
                </td>
                <td>
                  <div className="btn-group btn-group-xs">
                    <Button
                      color="primary"
                      onClick={() => history.push(`${match.url}/${_id}`)}
                    >
                      View
                    </Button>
                    {isActive ? (
                      false
                    ) : (
                      <DeletePatient idPatient={_id} firstName={firstName} />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert color="warning">No patients yet!</Alert>
      )}
    </div>
  );

const data = graphql(patientSearchQuery, {
  options: props => ({
    variables: {
      filter: props.filter
    }
  })
});

PatientListPure.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const PatientList = compose(data, pure)(PatientListPure);

const states = withState("filter", "setFilter", "");

const PatientSearch = ({ filter, setFilter, match, history }) => (
  <div>
    <div className="col">
      <Input
        type="text"
        placeholder="Search"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </div>
    <PatientList
      filter={filter}
      // limit={limit}
      // skip={skip}
      match={match}
      history={history}
    />
  </div>
);

PatientSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(states, pure)(PatientSearch);
