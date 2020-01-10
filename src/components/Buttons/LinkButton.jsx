import React from "react";

import {Text} from "..";
import { button, linkButton } from "./Button.module.scss";

const LinkButton = (props) => {
  return (
    <button
      className={`${button} ${linkButton} ${props.className}`}
      style={props.style}
    >
      <Text
        type={"Link"}
      >
        {props.children}
      </Text>
    </button>
  );
};

LinkButton.defaultProps = {
  className: "",
  style: {},
};

export default LinkButton;
