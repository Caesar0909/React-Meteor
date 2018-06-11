import BaseField from "uniforms/BaseField";
import nothing from "uniforms/nothing";
import { Children } from "react";

const DisplayIf = ({ children, condition }, { uniforms }) =>
  condition(uniforms) ? Children.only(children) : nothing;

DisplayIf.contextTypes = BaseField.contextTypes;

export default DisplayIf;
