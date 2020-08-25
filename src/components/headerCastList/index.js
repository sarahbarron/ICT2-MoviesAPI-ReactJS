import React from "react";
const HeaderCastList = ({ title, numCast }) => {
  return (
    <div className="row opacity-div">
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numCast}</span>
        </h2>
      </div>
    </div>
  );
};

export default HeaderCastList;
