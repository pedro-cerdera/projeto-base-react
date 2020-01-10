import React from "react";
import TextInputMask from "react-masked-text";

import {Text} from "../..";
import styles from "../Input.module.scss";

const TextInput = props => {
  const { errorMessage } = props;

  let style = props.style;

  if (errorMessage) {
    style = {
      borderColor: "red",
      ...style,
    };
  }

  return (
    <div className={`${styles.textInputContainer} ${props.className}`}>
      <Text type={"label"} className={styles.label}>
        {props.name}
      </Text>
      <TextInputMask
        ref={props.refTextMask}
        onChangeText={props.onChange}
        value={props.value}
        defaultValue={props.defaultValue}
        kind={props.kind}
        placeholder={props.placeholder}
        className={`${styles.input} ${styles.textInput}`}
        style={style}
        tabIndex={props.tabindex}
        options={props.options}
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
