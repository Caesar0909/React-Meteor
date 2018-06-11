import React from "react";
import { Row, Col } from "reactstrap";
import { withApollo } from "react-apollo";
import ClinicalForms from "../../components/ClinicalForms/ClinicalForms";

const ClinicalFormsPage = () => (
  <div className="full-height">
    <div className="Dashboard full-height sm-p-t-50 align-items-center d-md-flex">
      <Row className="full-width">
        <div className=" container-fluid   container-fixed-lg bg-white">
          <ClinicalForms />
        </div>
      </Row>
    </div>
  </div>
);

export default withApollo(ClinicalFormsPage);