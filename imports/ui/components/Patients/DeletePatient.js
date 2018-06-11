import React from "react";
import PropTypes from "prop-types";
import { graphql, withApollo } from "react-apollo";
import { Button } from "reactstrap";
import { Bert } from "meteor/themeteorchef:bert";
import SweetAlert from "sweetalert2-react";
import "sweetalert2/dist/sweetalert2.css";
import deletePatient from "../../../api/Patients/mutations/deletePatient.graphql";
import patientSearchQuery from "../../../api/Patients/queries/patientSearchQuery.graphql";
import admissions from "../../../api/Admissions/queries/admissions.graphql";
import careplansSearchQuery from "../../../api/Careplans/queries/careplansSearchQuery.graphql";

class DeletePatient extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleRemove(_id) {
    this.setState({ show: false });
    this.props
      .deletePatient({
        variables: { _id }
      })
      .then(() => {
        Bert.alert("Patient deleted!", "success");
      })
      .catch(error => {
        Bert.alert(error.message, "danger");
      });
  }
  render() {
    return (
      <div>
        <Button
          color="danger"
          onClick={() => this.setState({ show: true })}
          block
        >
          Delete
        </Button>
        <SweetAlert
          showCancelButton
          show={this.state.show}
          title={`You will delete patient ${this.props.firstName}`}
          text="Are you sure?"
          onConfirm={() => this.handleRemove(this.props.idPatient)}
        />
      </div>
    );
  }
}

DeletePatient.propTypes = {
  firstName: PropTypes.string.isRequired,
  idPatient: PropTypes.string.isRequired,
  deletePatient: PropTypes.func.isRequired
};

export default graphql(deletePatient, {
  name: "deletePatient",
  options: {
    refetchQueries: [
      {
        query: patientSearchQuery,
        variables: { filter: "" }
      },
      {
        query: admissions,
        variables: { filter: "" }
      },
      {
        query: careplansSearchQuery,
        variables: { filter: "" }
      }
    ]
  }
})(withApollo(DeletePatient));
