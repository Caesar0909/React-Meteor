import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withApollo } from "react-apollo";
import Loading from "../../../components/Loading/Loading";
import Search from "../../../components/Appointment/AppointmentSearch";
import { Card, CardHeader } from "../../../components/Card";

const Appointments = ({ loading, match, history }) =>
  !loading ? (
    <div className="row">
      <div className="col-sm-12">
        <Card>
          <CardHeader title="Appointment">
            <Link
              className="btn btn-success pull-right"
              to={`${match.url}/new`}
            >
              Add Appointment
            </Link>
          </CardHeader>
          <Search match={match} history={history} />
        </Card>
      </div>
    </div>
  ) : (
    <Loading />
  );

Appointments.propTypes = {
  loading: PropTypes.bool.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default withApollo(Appointments);
