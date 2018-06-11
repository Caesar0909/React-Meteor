import React from "react";
import classnames from "classnames";
import connectField from "uniforms/connectField";

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

const renderSelect = props => (
  <select
    className={classnames(
      props.inputClassName,
      "c-select form-control select2-selection__rendered",
      {
        "is-invalid": props.error
      }
    )}
    disabled={props.disabled}
    id={props.id}
    name={props.name}
    onChange={event => props.onChange(event.target.value)}
    ref={props.inputRef}
    value={props.value}
  >
    {(!!props.placeholder || !props.required) && (
      <option value="" disabled={props.required} hidden={props.required}>
        {props.placeholder ? props.placeholder : props.label}
      </option>
    )}

    {props.allowedValues.map(value => (
      <option key={value} value={value}>
        {props.transform ? props.transform(value) : value}
      </option>
    ))}
  </select>
);

const Select = props =>
  wrapField(
    props,
    props.checkboxes || props.fieldType === Array
      ? renderSelect(props)
      : renderSelect(props)
  );

export default connectField(Select);
