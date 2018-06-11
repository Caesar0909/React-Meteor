import React from "react";
import PropTypes from "prop-types";

const CardBody = ({ children }) => <div className="card-block">{children}</div>;

CardBody.propTypes = {
  children: PropTypes.object.isRequired
};

export default CardBody;
