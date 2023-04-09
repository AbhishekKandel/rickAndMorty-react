import React from "react";

const Label = ({ text, htmlFor, ...rest }) => {
  return (
    <label htmlFor={htmlFor} {...rest}>
      {text}{" "}
    </label>
  );
};

export default Label;
