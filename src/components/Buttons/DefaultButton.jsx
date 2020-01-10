import React from "react";

import { button } from "./Button.module.scss";

import colors from "../../styles/helpers/colors.scss";

const Button = props => {
  const style = {
    backgroundColor: colors[props.color],
    ...props.style,
  };

  return (
    <button
      className={`${button} ${props.className}`}
      style={style}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: "",
  style: {},
  color: "white",
};

export default Button;
