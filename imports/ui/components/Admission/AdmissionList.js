import React from "react";
import PropTypes from "prop-types";
import { pure, compose } from "recompose";
import { graphql } from "react-apollo";
import { Table, Button, Badge, Alert } from "reactstrap";
import Moment from "react-moment";
import Loading from "../../components/Loading/Loading";
import AdmissionSearchQuery from "../../../api/Admissions/queries/admissions.graphql";

const AdmissionList = ({ data: { loading, admissions }, match, history }) =>
  loading ? (
    <Loading />
  ) : (
    <div className="card-block">
      {admissions && admissions.length ? (
        <Table responsive className="table striped">
          <thead>
            <tr>
              <th>Patient</th>
              <th>Checked In</th>
              <th>Discharge</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {admissions.map(({ _id, start, end, isActive, patient }) => (
              <tr key={_id}>
                <td>{patient.firstName}</td>
                <td>
                  <Moment format="YYYY/MM/DD">{start}</Moment>
                </td>
                <td>
                  {end ? <Moment format="YYYY/MM/DD">{end}</Moment> : false}
                </td>
                <td>
                  {isActive ? (
                    <Badge color="success">Active</Badge>
                  ) : (
                    <Badge color="danger">Discharged</Badge>
                  )}
                </td>
                <td>
                  <div className="btn-group">
                    <Button
                      color="primary"
                      onClick={() => history.push(`${match.url}/${_id}`)}
                    >
                      View
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Alert color="warning">No admissions yet!</Alert>
      )}
    </div>
  );

const data = graphql(AdmissionSearchQuery, {
  options: props => ({
    variables: { filter: props.filter }
  })
});

AdmissionList.propTypes = {
  data: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(data, pure)(AdmissionList);
