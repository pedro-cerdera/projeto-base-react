import React from "react";

import colors from "../../styles/helpers/colors.scss";

const Icon = props => {
  const style = {
    color: colors[props.color],
    fontSize: props.size,
    ...props.style,
  };
  return (
    <i
      onClick={props.onClick}
      className={`${props.icon} ${props.className}`}
      style={style}
    />
  );
};

Icon.defaultProps = {
  size: 22,
  color: "black",
  className: "",
};

export default Icon;
