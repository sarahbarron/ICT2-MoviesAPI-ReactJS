import React, { useContext } from "react";
import MovieListPageTemplate from "../components/templateMovieListPage";
import SearchForm from "../components/searchForm";
import { MoviesContext } from "../contexts/moviesContext";
import AddToFavoritesButton from "../components/buttons/addToFavorites";

const SearchForMoviePage = (props) => {
  const context = useContext(MoviesContext);
  return (
    <>
      <SearchForm />
      <MovieListPageTemplate
        movies={context.search}
        title={"Search Results"}
        action={(movie) => <AddToFavoritesButton movie={movie} />}
      ></MovieListPageTemplate>
    </>
  );
};
export default SearchForMoviePage;
