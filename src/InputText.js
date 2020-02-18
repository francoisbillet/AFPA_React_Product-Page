import React from "react";

const InputText = ({ setInputProduct }) => {
  return (
    <input
      type="text"
      onChange={event => {
        setInputProduct(event.target.value);
      }}
    />
  );
};

export default InputText;
