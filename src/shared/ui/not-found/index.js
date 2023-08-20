import React from "react";

function NotFound({ children, rest }) {
  return (
    <div className="mt-50 slide-up-fade-in" {...rest}>
      {children}
    </div>
  );
}

export default NotFound;


