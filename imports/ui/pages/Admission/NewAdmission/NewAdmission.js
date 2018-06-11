import React from "react";
import PropTypes from "prop-types";
import AdmissionEditor from "../../../components/Admission/AdmissionEditor";

const NewAdmission = ({ history, userId, match }) => (
  <div className="NewAdmission">
    <h2 className="page-header">New Admission</h2>
    <AdmissionEditor history={history} match={match} userId={userId} />
  </div>
);

NewAdmission.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default NewAdmission;
