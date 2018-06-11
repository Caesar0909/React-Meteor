import React from "react";
import { PropTypes } from "prop-types";
import { Route, Link } from "react-router-dom";

const crumb = (part, partIndex, parts) => {
  const path = ["", ...parts.slice(0, partIndex + 1)].join("/");
  return (
    <li key={`${path[0]}${partIndex}`} className="breadcrumb-item">
      <Link key={path} to={path}>
        {part}
      </Link>
    </li>
  );
};

const Breadcrumbs = () => (
  <Route
    path="*"
    render={props => {
      let parts = props.location.pathname.split("/");
      const place = parts[parts.length - 1];
      parts = parts.slice(1, parts.length - 1);
      return (
        <ol className="breadcrumb">
          {parts.map(crumb)}
          <li className="breadcrumb-item active">{place}</li>
        </ol>
      );
    }}
  />
);

Breadcrumbs.defaultProps = {
  location: {}
};

Breadcrumbs.propTypes = {
  location: PropTypes.object
};

export default Breadcrumbs;
