import React, { Component } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import patientSearchQuery from "../../../api/Patients/queries/patientSearchQuery.graphql";

class Search extends Component {
  state = {
    patients: [],
    filter: ""
  };

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          Search
          <input
            type="text"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {this.state.patients.map((patient, index) => (
          <ul>
            <li>{patient._id}</li>
            <li>{patient.firstName}</li>
          </ul>
        ))}
      </div>
    );
  }

  _executeSearch = async () => {
    const { filter } = this.state;
    const result = await this.props.client.query({
      query: patientSearchQuery,
      variables: { filter }
    });
    const patients = result.data.patientsFilter;
    this.setState({ patients });
  };
}

export default withApollo(Search);
