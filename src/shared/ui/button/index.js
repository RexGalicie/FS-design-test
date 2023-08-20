import React from "react";

function ActionButton({ onClick, children, ...rest }) {
  return (
    <button className="" onClick={onClick} {...rest}>
      {children}
    </button>
  );
}

export default ActionButton;