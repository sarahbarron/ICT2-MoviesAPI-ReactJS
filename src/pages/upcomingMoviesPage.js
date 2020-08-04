import React, { useContext } from "react";
import PageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesButton from "../components/buttons/addToFavorites";

const UpcomingMoviesPage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={context.upcoming}
      action={(movie) => <AddToFavoritesButton movie={movie} />}
    />
  );
};

export default UpcomingMoviesPage;
