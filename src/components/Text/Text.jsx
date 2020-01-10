import React from "react";

import texts from "./Text.module.scss";

import colors from "../../styles/helpers/colors.scss";

const Text = props => {
  let style = props.style;
  if (props.color) {
    style = {
      ...props.style,
      color: colors[props.color]
    };
  }

  return (
    <span
      className={`${texts[props.type.toLowerCase()]} ${props.className}`}
      style={style}
      onClick={props.onClick}
    >
      {props.children}
    </span>
  );
};

Text.defaultProps = {
  className: "",
  style: {},
  type: "text"
};

export default Text;
