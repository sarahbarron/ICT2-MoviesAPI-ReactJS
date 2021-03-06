import React from "react";
import MovieHeader from "../headerMovie";
import "./moviePage.css";

const TemplateMoviePage = ({ movie, children }) => {
  try {
    return (
      <>
        <MovieHeader movie={movie} />
        <div className="row">
          <div className="col-3">
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : "./film-poster-placeholder.png"
              }
              className="movie"
              alt={movie.title}
            />
          </div>
          <div className="col-9">{children}</div>
        </div>
      </>
    );
  } catch (e) {
    console.log("error rendering template cast page: ", e);
    return (
      <div className="error-msg">
        <p>Error rendering the cast page</p>
      </div>
    );
  }
};

export default TemplateMoviePage;
