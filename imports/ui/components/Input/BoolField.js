import React from "react";
import classnames from "classnames";
import connectField from "uniforms/connectField";

import wrapField from "./wrapField";

const Bool = ({ label, labelBefore, ...props }) =>
  wrapField(
    { label: labelBefore, ...props },
    <div
      className={classnames(props.inputClassName, "form-check", "checkbox", {
        "text-danger": props.error,
        "custom-control-inline": props.inline
      })}
    >
      <input
        checked={props.value}
        className="form-check-input"
        disabled={props.disabled}
        id={props.id}
        name={props.name}
        onChange={() => props.onChange(!props.value)}
        ref={props.inputRef}
        type="checkbox"
      />
      <label htmlFor={props.id} className="form-check-label">
        &nbsp;
        {label}
      </label>
    </div>
  );

export default connectField(Bool);
