import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesButton from "../components/buttons/addToFavorites";

const MovieListPage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <PageTemplate
      title="All Movies"
      movies={context.movies}
      action={(movie) => (
        <AddToFavoritesButton movie={movie} movieGroup="movies" />
      )}
    />
  );
};

export default MovieListPage;
