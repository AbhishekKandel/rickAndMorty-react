import React from "react";
import "./styles.css";

const Button = ({ text, handleClick, disabled }) => {
  return (
    <button onClick={handleClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
