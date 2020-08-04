import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getTrendingMovies } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "load-movies":
      return {
        movies: [...action.payload.movies],
        trending: [...action.payload.trending],
        favorites: [],
      };
    case "add-review":
      return {
        movies: [...state.movies],
        favorites: [
          ...state.favorites.filter((m) => m.id !== action.payload.movie.id),
          { ...action.payload.movie, review: action.payload.review },
        ],
      };
      break;
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    movies: [],
    favorites: [],
    trending: [],
  });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    async function loadMovies() {
      const trending = await getTrendingMovies();
      console.log("trending: ", trending);
      const movies = await getMovies();
      console.log("movies: ", movies);
      dispatch({ type: "load-movies", payload: { trending, movies } });
    }

    loadMovies();
  }, []);

  // useEffect(() => {
  //   getMovies().then((movies) => {
  //     dispatch({ type: "load-movies", payload: { movies } });
  //   });
  // }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        trending: state.trending,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
