import React, { Component } from "react";
import PropTypes from "prop-types";
import { pure, compose } from "recompose";
import { graphql } from "react-apollo";

import { SelectField } from "../Input";
import CareplansQuery from "../../../api/Careplans/queries/careplans.graphql";

class CareplanSelectField extends Component {
  render() {
    const { loading, careplansByPatient } = this.props;

    let careplansOptions = [];
    if (careplansByPatient && careplansByPatient.length > 0) {
      careplansOptions = careplansByPatient.map(item => ({
        value: item._id,
        label: item._id
      }));
    }

    return loading ? (
      ""
    ) : (
      <SelectField
        name="careplanId"
        placeholder="Select a Careplan"
        options={careplansOptions}
        showInlineError
      />
    );
  }
}

export default compose(
  graphql(CareplansQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ patientId }) => {
      return {
        variables: { patientId }
      };
    }
  }),
  pure
)(CareplanSelectField);
