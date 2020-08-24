import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MovieCard = ({ movie, action }) => {
  try {
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
  } catch (e) {
    console.log("Unable to return the movie card with details: ", e);
    return <div className="error-msg">Unable to view Movies at this time</div>;
  }
};

export default MovieCard;
