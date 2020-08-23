import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({ movie, action }) => {
  if (movie.id) {
    return (
      <div id="card-column" className="col-sm-3">
        <div className="card card-container  bg-white">
          <Link to={`/movies/${movie.id}`}>
            <img
              className="card-img-tag center "
              alt={movie.title}
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>
          <div className="card-body">
            <h4 className="card-title ">{movie.title}</h4>
            <p>
              <FontAwesomeIcon icon={["fas", "calendar"]} />
              <span> {movie.release_date}</span>
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "star"]} />
              <span> {movie.vote_average}</span>
            </p>
          </div>
          <div className="card-footer">{action(movie)}</div>
        </div>
      </div>
    );
  } else {
    return (
      <div id="card-column" className="col-sm-3">
        <div className="card card-container  bg-white">
          <h4 className="card-title ">Error Returning Movie</h4>
          <img
            className="card-img-tag center "
            src={"./film-poster-placeholder.png"}
          />

          <div className="card-body">
            <p>
              <FontAwesomeIcon icon={["fas", "calendar"]} />
            </p>
            <p>
              <FontAwesomeIcon icon={["fas", "star"]} />
            </p>
          </div>
          <div className="card-footer"></div>
        </div>
      </div>
    );
  }
};

export default MovieCard;
