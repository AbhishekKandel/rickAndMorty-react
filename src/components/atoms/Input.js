import React from "react";

const Input = ({
  type,
  id,
  handleChange,
  value,
  placeholder,
  checked,
  ...rest
}) => {
  return (
    <input
      type={type}
      id={id}
      onChange={handleChange}
      placeholder={placeholder}
      value={value}
      checked={checked}
      {...rest}
    />
  );
};

export default Input;
