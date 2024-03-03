import React from "react";

const FormInput = ({ type, placeHolder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};

export default FormInput;
