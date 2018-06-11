import React from "react";
import PropTypes from "prop-types";
import { PatientEditor } from "../../../components/Patient";

const NewPatient = ({ history, userId, match }) => (
  <div>
    <div className="container">
      <h2 className="page-header">New Patient</h2>
    </div>
    <div className="NewPatient">
      <PatientEditor history={history} userId={userId} match={match} />
    </div>
  </div>
);

NewPatient.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default NewPatient;
