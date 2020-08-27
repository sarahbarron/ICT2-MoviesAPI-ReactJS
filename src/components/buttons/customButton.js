import React from "react";

const CustomButton = ({ children, ...otherProps }) => (
  <button className="btn btn-primary space-between" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
