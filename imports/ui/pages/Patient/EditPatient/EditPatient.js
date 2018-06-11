import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";
import { PatientEditor } from "../../../components/Patient";
import NotFound from "../../NotFound/NotFound";

const EditPatient = ({ patient, history, match }) =>
  patient ? (
    <div className="EditPatient">
      <h4 className="page-header">{`Editing "${patient.firstName}"`}</h4>
      <PatientEditor patient={patient} history={history} match={match} />
    </div>
  ) : (
    <NotFound />
  );

EditPatient.defaultProps = {
  patient: null
};

EditPatient.propTypes = {
  patient: PropTypes.object,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

const patientQuery = gql`
  query Patient($id: ID!) {
    patient(_id: $id) {
      _id
      firstName
      lastName
      email
      gender
      createdAt
      isActive
    }
  }
`;

export default graphql(patientQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ match }) => {
    const id = match ? match.params._id : "";
    return { variables: { id } };
  }
})(EditPatient);
