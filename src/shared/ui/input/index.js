import React from "react";

function Input({ value, onChange, placeholder, ...rest }) {
  return (
    <input 
      type="text" 
      className="large" 
      placeholder={placeholder} 
      value={value}
      onChange={onChange}
      {...rest}
    />
  );
}

export default Input;