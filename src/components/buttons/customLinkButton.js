import React from "react";
import { Link } from "react-router-dom";

const CustomLinkButton = ({ children, ...otherProps }) => (
  <Link className="btn w-100 btn-warning " {...otherProps}>
    {children}
  </Link>
);

export default CustomLinkButton;
