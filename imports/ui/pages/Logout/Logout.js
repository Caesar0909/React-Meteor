import React from "react";
import { Meteor } from "meteor/meteor";
import Icon from "../../components/Icon/Icon";

import "./Logout.scss";

class Logout extends React.Component {
  componentDidMount() {
    Meteor.logout();
  }

  render() {
    return (
      <div className="Logout">
        <img
          src="https://cdn0.iconfinder.com/data/icons/business-finance-i-glyph/2048/Follow-up-512.png"
          alt="Followup"
        />
        <h1>Stay safe out there.</h1>
      </div>
    );
  }
}

Logout.propTypes = {};

export default Logout;
