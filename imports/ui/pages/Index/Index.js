import React from "react";
import { Button } from "reactstrap";

import "./Index.scss";
import "react-select2-wrapper/css/select2.css";

const Index = () => (
  <div className="Index">
    <img
      src="https://cdn0.iconfinder.com/data/icons/business-finance-i-glyph/2048/Follow-up-512.png"
      alt="Followup"
    />
    <h1>Followup</h1>
    <p>Description of Followup.</p>
    <div>
      <Button href="http://docs">Read the Docs</Button>
    </div>
    <footer>
      <p>
        Need help ?{" "}
        <a href="http://followup.campaign">Check out FollowUP for bussinnes</a>.
      </p>
    </footer>
  </div>
);

export default Index;
