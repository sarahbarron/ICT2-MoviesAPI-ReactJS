import React from "react";
import { Link } from "react-router-dom";

const ViewPersonButton = ({ person }) => {
  try {
    return (
      <Link
        className="btn w-100 btn-primary btn-margin"
        to={{
          pathname: `/person/${person.id}`,
        }}
      >
        More Details ...
      </Link>
    );
  } catch (e) {
    console.log("view person button error: ", e);
    return <div className="error-msg">Button unavailable</div>;
  }
};

export default ViewPersonButton;
