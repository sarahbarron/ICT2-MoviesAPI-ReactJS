import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesButton from "../components/buttons/addToFavorites";

const TrendingMoviesPage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <PageTemplate
      title="Todays Trending Movies"
      movies={context.trending}
      action={(movie) => (
        <AddToFavoritesButton movie={movie} movieGroup="trending" />
      )}
    />
  );
};

export default TrendingMoviesPage;
