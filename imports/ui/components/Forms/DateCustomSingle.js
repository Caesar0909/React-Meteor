import React from "react";
import PropTypes from "prop-types";
import { SingleDatePicker } from "react-dates";
import moment from "moment";

class DateCustomSingle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }

  render() {
    const index =
      this.props.name.substr(this.props.name.indexOf(".") + 1) || false;
    /* eslint-disable-next-line no-nested-ternary */
    const dateReceived = index
      ? this.props.model.adverse_event[index]
        ? moment(this.props.model.adverse_event[index].date)
        : null
      : this.props.model[this.props.field]
        ? moment(this.props.model[this.props.field])
        : null;
    return (
      <div className="form-group">
        {/* eslint-disable-next-line jsx-a11y/label-has-for */}
        <label htmlFor={this.props.field}>{this.props.label}</label>
        <br />
        <SingleDatePicker
          key={this.props.field}
          id={this.props.field}
          placeholder="Select Date"
          date={dateReceived}
          onDateChange={date =>
            this.props.onChangeDate({
              field: this.props.field,
              date,
              index:
                this.props.name.substr(this.props.name.indexOf(".") + 1) || null
            })
          }
          focused={this.state.focused}
          onFocusChange={({ focused }) => this.setState({ focused })}
        />
      </div>
    );
  }
}

DateCustomSingle.defaultProps = {
  model: {},
  name: "",
  index: null
};

DateCustomSingle.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  field: PropTypes.string.isRequired,
  index: PropTypes.string,
  model: PropTypes.object,
  onChangeDate: PropTypes.func.isRequired
};

export default DateCustomSingle;
