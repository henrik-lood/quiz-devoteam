import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, className, onClick, disabled }) => {
  return (
    <button
      type="button"
      className={disabled ? styles.disabled : styles[className]}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  );
};
