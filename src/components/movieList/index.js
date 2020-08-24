import React from "react";
import Movie from "../movieCard/";
import "./movieList.css";

const MovieList = ({ movies, action }) => {
  try {
    const movieCards = movies.map((m) => (
      <Movie key={m.id} movie={m} action={action} />
    ));
    return <div className="row movies movie-list-bg">{movieCards}</div>;
  } catch (e) {
    console.log("error retrieving cast members: ", e);
    return <div className="error-msg">Unable to view Movies at this time</div>;
  }
};

export default MovieList;
