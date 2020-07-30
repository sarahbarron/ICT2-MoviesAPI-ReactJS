import React from "react";
import "./header-movie-list.css";
const Header = ({ title, numMovies }) => {
  return (
    <div className="row opacity-div">
      <div className="col-md-6 offset-4">
        <h2>
          {`${title}  `}
          <span className="badge badge-pill badge-success">{numMovies}</span>
        </h2>
      </div>
    </div>
  );
};

export default Header;
