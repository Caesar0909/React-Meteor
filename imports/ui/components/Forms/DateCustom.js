import React from "react";
import PropTypes from "prop-types";
import { SingleDatePicker } from "react-dates";
import connectField from "uniforms/connectField";
import moment from "moment";

class DateCustom extends React.Component {
  constructor(props) {
    super(props);
    this.changeDate = this.changeDate.bind(this);
    this.state = {
      focused: false
    };
  }

  componentDidMount() {
    const value = this.props.value? this.props.value : this.props.model? this.props.model[this.props.field]: null;
    const dateReceived = value
      ? moment(new Date(value)).format('MM/DD/YYYY')
      : null;

    $(this.dateContainer).datepicker('setDate', dateReceived).on('changeDate', (e) => {
      //  e here contains the extra attributes
      this.changeDate(e);
    });
  }

  componentDidUpdate() {
    //$(this.dateContainer).datepicker();
    const value = this.props.value? this.props.value : this.props.model? this.props.model[this.props.field]: null;
    const dateReceived = value
      ? moment(new Date(value)).format('MM/DD/YYYY')
      : null;

    $(this.dateContainer).datepicker('setDate', dateReceived).on('changeDate', (e) => {
      //  e here contains the extra attributes
      this.changeDate(e);
    });
  }

  changeDate(evt) {
    this.props.onChange(evt.date, this.props.field);
    /*this.props.onChangeDate({
      field: this.props.field,
      date: evt.date,
      index:
      this.props.name.substr(this.props.name.indexOf(".") + 1) || null
    });*/
  }

  render() {
    const index =
      this.props.name.substr(this.props.name.indexOf(".") + 1) || false;
    /* eslint-disable-next-line no-nested-ternary */

    return (
      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor={`${this.props.id}`}>{this.props.label}</label>
        <br />
        <div className="input-group date col-md-8 p-l-0"
             ref={(input) => { this.dateContainer = input;}}
        >
          <input type="text" id={`${this.props.id}`}
                 className="form-control"
                 name={this.props.name}
          />
          <span className="input-group-addon">
            <i className="fa fa-calendar"></i>
          </span>
        </div>
      </div>
    );
  }
}

DateCustom.defaultProps = {
  model: {},
  name: "",
  index: null
};

DateCustom.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  field: PropTypes.string.isRequired,
  index: PropTypes.string,
  model: PropTypes.object,
  onChangeDate: PropTypes.func.isRequired
};

export default connectField(DateCustom);
