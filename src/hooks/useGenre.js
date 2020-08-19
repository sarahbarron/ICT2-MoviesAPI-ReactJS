import { useEffect, useContext } from "react";
import { getGenreMovies } from "../api/tmdb-api";
import { MoviesContext } from "../contexts/moviesContext";
const useGenre = (id) => {
  const context = useContext(MoviesContext);
  if (id === "0") {
    id = "";
  }
  useEffect(() => {
    getGenreMovies(id).then((movies) => {
      console.log("useEffect: ", id + " " + movies);
      context.loadGenreMovies(movies);
    });
  }, [id]);

  return [context.genremovies];
};

export default useGenre;
