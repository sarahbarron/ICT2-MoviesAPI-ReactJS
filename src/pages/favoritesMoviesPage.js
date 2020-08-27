import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import { MoviesContext } from "../contexts/moviesContext";
import CustomLinkButton from "../components/buttons/customLinkButton";

const FavoriteMoviesPage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <MovieListPageTemplate
      movies={context.favorites}
      title={"Favorite Movies"}
      action={(movie) => (
        <CustomLinkButton
          className="btn w-100 btn-warning "
          to={{
            pathname: `/reviews/form`,
            state: {
              movie: movie,
            },
          }}
        >
          <p> Write A Review... </p>
        </CustomLinkButton>
      )}
    />
  );
};

export default FavoriteMoviesPage;
