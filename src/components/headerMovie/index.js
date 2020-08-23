import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
import { Link } from "react-router-dom";

const MovieHeader = ({ movie }) => {
  if (movie) {
    return (
      <div className="row opacity-div">
        <div className="col-6 offset-3">
          <h2>
            {movie.title}
            {"  "}
            <a href={movie.homepage}>
              <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
            </a>
          </h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className="row opacity-div">
        <div className="col-6 offset-3">
          <h2>
            No Movie Title{" "}
            <Link to={`/`}>
              <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
            </Link>
          </h2>
        </div>
      </div>
    );
  }
};

export default MovieHeader;
