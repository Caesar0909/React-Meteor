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

const CareplanCard = ({ questionnaire }) => (
  <Link
    style={{ fontSize: "17px" }}
    to={`/questionnaires/${questionnaire._id}`}
  >
    <Card style={{ width: "18rem" }}>
      <CardHeader>
        <div className="pull-right">Status {questionnaire.status}</div>
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5" style={{ fontWeight: "bold" }}>
          {questionnaire.name}
        </CardTitle>
        <CardSubtitle>
          Last <Moment calendar>{questionnaire.createdAt}</Moment>
        </CardSubtitle>
      </CardBody>
      <CardFooter className="text-muted">
        <Icon className="pull-right" icon="ellipsis-v" />
      </CardFooter>
    </Card>
  </Link>
);

CareplanCard.propTypes = {
  questionnaire: PropTypes.object.isRequired
};

export default CareplanCard;
