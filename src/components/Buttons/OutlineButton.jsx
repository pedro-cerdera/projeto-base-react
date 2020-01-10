import React from "react";

import {Text} from "..";
import { button, outlineButton } from "./Button.module.scss";

const OutlineButton = props => {
  return (
    <button
      className={`${button} ${outlineButton} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      <Text type={"button"} color={props.textColor}>
        {props.children}
      </Text>
    </button>
  );
};

OutlineButton.defaultProps = {
  className: "",
  style: {},
  textColor: "primary"
};

export default OutlineButton;
