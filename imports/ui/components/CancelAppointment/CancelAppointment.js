import React from "react";
import PropTypes from "prop-types";
import { graphql, withApollo } from "react-apollo";
import { Button } from "reactstrap";
import { Bert } from "meteor/themeteorchef:bert";
import SweetAlert from "sweetalert2-react";
import "sweetalert2/dist/sweetalert2.css";
import cancelAppointment from "../../../api/Appointments/mutations/cancelAppointment.graphql";
import AppointmentsQuery from "../../../api/Appointments/queries/appointments.graphql";

class CancelAppointment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleRemove() {
    const appointment = {
      _id: this.props._id,
      cancelReason: this.props.cancelReason,
      comment: this.props.comment
    };

    this.props
      .cancelAppointment({
        variables: { appointment }
      })
      .then(() => {
        Bert.alert("Appointment canceled!", "success");
        this.setState({ show: false });
        this.props.history.push(`/appointments`);
        this.props.onCancelAppointmentClick(true);
      })
      .catch(error => {
        Bert.alert(error.message, "danger");
      });
  }

  render() {
    const { patientName } = this.props;
    return (
      <div>
        <Button
          color="danger"
          onClick={() => this.setState({ show: true })}
          block
        >
          Cancel Appointment
        </Button>
        <SweetAlert
          showCancelButton
          show={this.state.show}
          title={`You will cancel appointment ${patientName}`}
          text="Are you sure?"
          onConfirm={() => this.handleRemove()}
        />
      </div>
    );
  }
}

CancelAppointment.propTypes = {
  _id: PropTypes.string.isRequired,
  patientName: PropTypes.string.isRequired,
  cancelReason: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  cancelAppointment: PropTypes.func.isRequired,
  onCancelAppointmentClick: PropTypes.func.isRequired,
  history: PropTypes.func.isRequired
};

export default graphql(cancelAppointment, {
  name: "cancelAppointment",
  options: {
    refetchQueries: [
      {
        query: AppointmentsQuery,
        variables: { filter: "" }
      }
    ]
  }
})(withApollo(CancelAppointment));
