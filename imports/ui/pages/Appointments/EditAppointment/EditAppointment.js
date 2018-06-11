import React from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";
import AppointmentEditor from "../../../components/Appointment/AppointmentEditor";
import NotFound from "../../NotFound/NotFound";
import appointmentQuery from "../../../../api/Appointments/queries/getAppointment.graphql";

const EditAppointment = ({ appointment, history, userId, match }) =>
  appointment ? (
    <div className="EditAppointment">
      <h4 className="page-header">{`Editing "${appointment._id}"`}</h4>
      <AppointmentEditor
        appointment={appointment}
        history={history}
        match={match}
        userId={userId}
      />
    </div>
  ) : (
    <NotFound />
  );

EditAppointment.defaultProps = {
  appointment: null
};

EditAppointment.propTypes = {
  appointment: PropTypes.object,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default graphql(appointmentQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ match }) => {
    const id = match ? match.params._id : "";
    return { variables: { id } };
  }
})(EditAppointment);
