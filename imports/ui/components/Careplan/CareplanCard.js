import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardFooter
} from "reactstrap";
import { Link } from "react-router-dom";

import Icon from "../Icon/Icon";

const CareplanCard = ({ careplan, patient }) => (
  <Link style={{ fontSize: "17px" }} to={`/careplans/${careplan._id}`}>
    <Card style={{ width: "18rem" }}>
      <CardHeader>
        <div className="pull-right">Surgery {careplan.status}</div>
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5" style={{ fontWeight: "bold" }}>
          {`Careplan for ${patient.firstName} ${patient.lastName}`}
        </CardTitle>
        <CardSubtitle>
          Last <Moment calendar>{careplan.createdAt}</Moment>
        </CardSubtitle>
      </CardBody>
      <CardFooter className="text-muted">
        <Icon className="pull-right" icon="ellipsis-v" />
      </CardFooter>
    </Card>
  </Link>
);

CareplanCard.propTypes = {
  careplan: PropTypes.object.isRequired,
  patient: PropTypes.object.isRequired
};

export default CareplanCard;
