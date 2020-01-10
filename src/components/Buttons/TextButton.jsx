import React from "react";

import {Text} from "..";
import { button, textButton } from "./Button.module.scss";

const TextButton = props => {
  return (
    <button
      className={`${button} ${textButton} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
      tabIndex={props.tabindex}
    >
      <Text type={"button"} color={"primary"}>
        {props.children}
      </Text>
    </button>
  );
};

TextButton.defaultProps = {
  className: "",
  style: {},
};

export default TextButton;
