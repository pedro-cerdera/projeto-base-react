import React from "react";

import {Icon} from "..";
import { button, mainButton } from "./Button.module.scss";

const IconButton = props => {
  return (
    <button
      className={`${button} ${mainButton} ${props.className}`}
      style={props.style}
      onClick={props.onClick}
    >
      <Icon
        icon={props.icon}
        color={props.color}
        className={props.classNameIcon}
      />
    </button>
  );
};

IconButton.defaultProps = {
  className: "",
  style: {},
};

export default IconButton;
