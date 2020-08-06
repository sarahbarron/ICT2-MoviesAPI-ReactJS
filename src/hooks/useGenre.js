import { useEffect, useState, useContext } from "react";
import { getGenreMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
const useGenre = (id) => {
  const context = useContext(MoviesContext);

  useEffect(() => {
    if (id == 0) {
      id = 10751;
    }
    getGenreMovies(id).then((movies) => {
      console.log("useEffect: ", id + " " + movies);
      context.loadGenreMovies(movies);
    });
  }, [id]);

  return [context.genremovies];
};

export default useGenre;
