import React from "react";

function List({ children, ...rest }) {
  return (
    <ul className="mt-50 slide-up-fade-in styled" {...rest}>
      {children}
    </ul>
  );
}

export default List; 