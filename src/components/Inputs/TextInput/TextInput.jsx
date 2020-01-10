import React from "react";

import {Text} from "../..";
import styles from "../Input.module.scss";

const TextInput = props => {
  const {
    errorMessage,
    optional,
    refTextInput,
    tabindex,
    maxlength,
    ...rest
  } = props;
  const styleMarginLeft = { marginLeft: "5px" };

  let style = props.style;

  if (errorMessage) {
    style = {
      borderColor: "red",
      ...style,
    };
  }

  return (
    <div className={`${styles.textInputContainer} ${props.className}`}>
      {!optional && (
        <Text type={"label"} className={styles.label}>
          {props.name}
        </Text>
      )}
      {optional && (
        <div>
          <Text type={"label"} className={styles.label}>
            {props.name}
          </Text>
          <Text type={"caption"} style={styleMarginLeft}>
            {"(opcional)"}
          </Text>
        </div>
      )}
      <input
        {...rest}
        ref={refTextInput}
        maxLength={maxlength}
        tabIndex={tabindex}
        className={`${styles.input} ${props.icon ? styles.inputIcon : ""}`}
        style={style}
      />
      {errorMessage && (
        <Text type={"caption"} className={styles.errorMessage}>
          {errorMessage}
        </Text>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  className: "",
  style: {},
};

export default TextInput;
