import React from "react";

function ListItem({ label, value, ...rest }) {
  return (
    <li className="py-10" {...rest}>{label}: {value}</li>
  );
}

export default ListItem;