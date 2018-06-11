import React from "react";
import PropTypes from "prop-types";

const CardHeader = ({ title, children }) => (
  <div className="card-header">
    <h2 className="card-title">{title}</h2>
    {children}
  </div>
);

CardHeader.propTypes = {
  children: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired
};

export default CardHeader;
