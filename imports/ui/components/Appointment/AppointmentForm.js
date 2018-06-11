import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import { AutoForm, SubmitField, DateField } from "uniforms-bootstrap4";
import DateCustomSingle from "../Forms/DateCustomSingle";

import Loading from "../Loading/Loading";
import { SelectField } from "../Input";
import AppointmentSchema from "../../../api/Appointments/bridge";
import CareplanSelectField from "../Careplan/CareplanSelectField";

class AppointmentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      patientId: "",
      model: {}
    };
  }

  onFormChange = (key, value) => {
    if (key === "patientId") {
      this.setState({ patientId: value });
    }
  };

  changeDate = ({ date, field }) => {
    console.log("date=" + date + " field= " + field);

    const newModel = Object.assign({}, this.state.model);
    newModel[field] = date.toDate();

    this.setState({ model: newModel });
  };

  onChangeModel = model => {
    this.setState({ model });
    console.log("onChangeModel", model);
  };

  componentWillReceiveProps(newProps) {
    if (newProps.model) {
      const appointmentModel = {
        ...newProps.model,
        start: new Date(newProps.model.start)
      };

      this.setState({ model: appointmentModel });
    }
  }

  render() {
    const {
      model,
      patients,
      physicians,
      locations,
      loading,
      handleSubmit,
      history,
      onValidate
    } = this.props;

    let patientsOptions = [];
    if (patients) {
      patientsOptions = patients.map(item => ({
        value: item._id,
        label: item.firstName
      }));
    }
    if (physicians) {
      physiciansOptions = physicians.map(item => ({
        value: item._id,
        label: `${item.profile.name.first} ${item.profile.name.last}`
      }));
    }
    let locationsOptions = [];
    if (locations && locations.length > 0) {
      locationsOptions = locations.map(item => ({
        value: item._id,
        label: item.name
      }));
    }

    return (
      <AutoForm
        schema={AppointmentSchema}
        onSubmit={doc => handleSubmit(doc, history)}
        model={this.state.model}
        onValidate={onValidate}
        onChange={this.onFormChange}
        onChangeModel={this.onChangeModel}
        validate="onSubmit"
      >
        <Container>
          <Row>
            <Col>
              <SelectField name="appointmentType" />
              <SelectField
                name="participants"
                placeholder="Select a Physician"
                options={physiciansOptions}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SelectField
                name="patientId"
                placeholder="Select a Patient"
                options={patientsOptions}
              />
              {this.state.patientId ? (
                <CareplanSelectField patientId={this.state.patientId} />
              ) : (
                ""
              )}
            </Col>
          </Row>
          <Row>
            <Col>
              <DateCustomSingle
                label="Start date"
                model={this.state.model}
                onChangeDate={this.changeDate}
                field="start"
              />
            </Col>
            <Col>
              <DateCustomSingle
                label="End date"
                model={this.state.model}
                onChangeDate={this.changeDate}
                field="end"
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <SelectField name="locationId" placeholder="Select a Location" />
              <div className="super-special-class">
                <SubmitField
                  className="super-special-class-with-suffix"
                  disabled={false}
                  value="Save"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </AutoForm>
    );
  }
}

AppointmentForm.defaultProps = {
  patients: [],
  physicians: [],
  careplans: [],
  locations: []
};

AppointmentForm.propTypes = {
  model: PropTypes.object.isRequired,
  patients: PropTypes.array,
  physicians: PropTypes.array,
  locations: PropTypes.array,
  handleSubmit: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  onValidate: PropTypes.func.isRequired
};

export default AppointmentForm;
