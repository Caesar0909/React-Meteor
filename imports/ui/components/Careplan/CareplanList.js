import React from "react";
import PropTypes from "prop-types";
import { pure, compose } from "recompose";
import { graphql } from "react-apollo";
import { Table, Button, Badge, Alert, Row, Col } from "reactstrap";
import Moment from "react-moment";

import Loading from "../Loading/Loading";
import CareplansQuery from "../../../api/Careplans/queries/careplans.graphql";
import CareplanHorizontalCard from "./CareplanHorizontalCard";
import Accordion from "../Accordion/Accordion";

const CareplanList = ({
  loading,
  careplansByPatient,
  patient,
  match,
  history
}) =>
  /* eslint-disable-next-line no-nested-ternary */
  loading ? (
    <Loading />
  ) : (careplansByPatient && careplansByPatient.length) > 0 ? (
    <Accordion>
      {careplansByPatient.map(careplan => (
        <CareplanHorizontalCard
          key={careplan._id}
          title={`Careplans for: ${patient.firstName} ${patient.lastName}`}
          careplan={careplan}
          patient={patient}
        />
      ))}
    </Accordion>
  ) : (
    <Col>
      <Alert color="warning">No careplans yet!</Alert>
    </Col>
  );

CareplanList.propTypes = {
  patient: PropTypes.object.isRequired,
  careplansByPatient: PropTypes.array.isRequired
};

export default compose(
  graphql(CareplansQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ patient, match }) => {
      const id = match ? match.params.patientId : patient._id;
      return {
        variables: { patientId: id },
        refetchQueries: [CareplansQuery]
      };
    }
  }),
  pure
)(CareplanList);
