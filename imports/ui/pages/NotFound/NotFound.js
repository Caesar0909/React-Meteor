import React from "react";
import { Alert } from "reactstrap";

const NotFound = () => (
  <div className="NotFound">
    <Alert color="danger">
      <p>
        <strong>Error [404]</strong>: {window.location.pathname} does not exist.
      </p>
    </Alert>
  </div>
);

export default NotFound;
