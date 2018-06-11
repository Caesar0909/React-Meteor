import React from "react";
import PropTypes from "prop-types";
import AppointmentEditor from "../../../components/Appointment/AppointmentEditor";

const NewAppointment = ({ history, userId, match }) => (
  <div className="NewAppointment">
    <h2 className="page-header">New Appointment</h2>
    <AppointmentEditor history={history} match={match} userId={userId} />
  </div>
);

NewAppointment.propTypes = {
  history: PropTypes.object.isRequired,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired
};

export default NewAppointment;
