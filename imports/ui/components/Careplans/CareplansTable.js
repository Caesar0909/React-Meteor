import React from "react";
import PropType from "prop-types";
import { Link } from "react-router-dom";
import { Table, Badge } from "reactstrap";

const CareplansTable = ({ careplans }) => (
  <Table responsive className="table striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {careplans
        ? careplans.map(({ _id, patient, isActive }) => (
            <tr key={_id}>
              <td>
                <Link to={`/careplans/${_id}`}>
                  {patient
                    ? `Careplan for ${patient.firstName} ${patient.lastName}`
                    : ""}
                </Link>
              </td>
              <td>
                {isActive ? (
                  <Badge color="success">Active</Badge>
                ) : (
                  <Badge color="danger">Archieved</Badge>
                )}
              </td>
            </tr>
          ))
        : ""}
    </tbody>
  </Table>
);

CareplansTable.propTypes = {
  careplans: PropType.array.isRequired
};

export default CareplansTable;
