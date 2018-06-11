import React from "react";
import { Row, Col } from "reactstrap";
import { withApollo } from "react-apollo";
import ClinicalForms from "../../components/Dashboard/ClinicalForms";
import Undiagnosed from "../../components/Dashboard/Undiagnosed";
import Pathway from "../../components/Dashboard/Pathway";
import SurgeryPathway from "../../components/Dashboard/SurgeryPathway";
import Appointments from "../../components/Dashboard/Appointments";

const Dashboard = () => (
  <div className="full-height">
    <div className="Dashboard full-height sm-p-t-50 align-items-center d-md-flex">
      <Row className="full-width">
        <Col className="col-lg-5">
          <Row>
            <div className="col-md-12">
              <ClinicalForms />
            </div>
          </Row>
          <Row>
            <div className="col-sm-4">
              <Undiagnosed />
              <Pathway />
            </div>
            <Col className="col-sm-8 m-b-10">
              <SurgeryPathway />
            </Col>
          </Row>
        </Col>
        <Col className="col-lg-7 col-sm-12">
          <Appointments />
        </Col>
      </Row>
    </div>
  </div>
);

export default withApollo(Dashboard);
