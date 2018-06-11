import React from "react";
import classnames from "classnames";
import connectField from "uniforms/connectField";
import Select from "react-select";
import "react-select/dist/react-select.css";

import wrapField from "./wrapField";

const xor = (item, array) => {
  const index = array.indexOf(item);
  if (index === -1) {
    return array.concat([item]);
  }

  return array.slice(0, index).concat(array.slice(index + 1));
};

const renderCheckboxes = props => {
  const value = props.value || [];
  return props.allowedValues.map(item => (
    <div
      key={item}
      className={classnames(
        props.inputClassName,
        `checkbox${props.inline ? "-inline" : ""}`
      )}
    >
      <input
        checked={
          props.fieldType === Array ? value.includes(item) : value === item
        }
        disabled={props.disabled}
        id={`${props.id}-${item}`}
        name={props.name}
        onChange={() =>
          props.onChange(props.fieldType === Array ? xor(item, value) : item)
        }
        type="checkbox"
      />
      <label htmlFor={`${props.id}-${item}`}>
        {props.transform ? props.transform(item) : item}
      </label>
    </div>
  ));
};

const renderSelect = props => {
  return (
    <Select
      className={classnames(props.inputClassName)}
      disabled={props.disabled}
      id={`${props.id}`}
      name={props.name}
      onChange={selectedOption => {
        props.onChange(selectedOption.value);
      }}
      ref={props.inputRef}
      value={props.value}
      options={props.options}
      multi={props.multi}
      removeSelected={props.removeSelected}
    />
  );
};

const SelectField = props =>
  wrapField(
    props,
    props.checkboxes || props.fieldType === Array
      ? renderCheckboxes(props)
      : renderSelect(props)
  );

export default connectField(SelectField);
