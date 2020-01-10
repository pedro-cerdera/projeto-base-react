import React from "react";

import {Text} from "..";
import { button, mainButton } from "./Button.module.scss";

const MainButton = props => {
  return (
    <button
      className={`${button} ${mainButton} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
      tabIndex={props.tabindex}
    >
      <Text type={"button"} color={"white"}>
        {props.children}
      </Text>
    </button>
  );
};

MainButton.defaultProps = {
  className: "",
  style: {}
};

export default MainButton;
