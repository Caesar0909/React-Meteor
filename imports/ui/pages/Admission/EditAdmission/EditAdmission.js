import React from "react";
import { graphql } from "react-apollo";
import PropTypes from "prop-types";
import AdmissionEditor from "../../../components/Admission/AdmissionEditor";
import NotFound from "../../NotFound/NotFound";
import admissionQuery from "../../../../api/Admissions/queries/admission.graphql";

const EditAdmission = ({ admission, history, userId, match }) =>
  admission ? (
    <div className="EditAdmission">
      <h4 className="page-header">{`Editing "${admission._id}"`}</h4>
      <AdmissionEditor
        admission={admission}
        history={history}
        match={match}
        userId={userId}
      />
    </div>
  ) : (
    <NotFound />
  );

EditAdmission.defaultProps = {
  admission: null
};

EditAdmission.propTypes = {
  admission: PropTypes.object,
  userId: PropTypes.string.isRequired,
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default graphql(admissionQuery, {
  props: ({ data }) => ({ ...data }),
  options: ({ match }) => {
    const id = match ? match.params._id : "";
    return { variables: { id } };
  }
})(EditAdmission);
