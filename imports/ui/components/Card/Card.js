import React from "react";
import PropTypes from "prop-types";

const Card = ({ children }) => (
  <div className="card card-transparent">{children}</div>
);

Card.propTypes = {
  children: PropTypes.object.isRequired
};

export default Card;
