import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import AddToFavoritesButton from "../components/buttons/addToFavorites";
import useGenre from "../hooks/useGenre";

const GenreMoviesPage = (props) => {
  const { id } = props.match.params;
  const [movies] = useGenre(id);

  return (
    <>
      {movies ? (
        <PageTemplate
          title="All Movies"
          movies={movies}
          action={(movie) => <AddToFavoritesButton movie={movie} />}
        />
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default GenreMoviesPage;
