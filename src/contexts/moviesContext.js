import React, { useEffect, createContext, useReducer } from "react";
import {
  getMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../api/tmdb-api";

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
        upcoming: [...action.payload.upcoming],
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
    upcoming: [],
  });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  // const async trending = () =>
  // {
  //   const trending = await getTrendingMovies();
  //   dispatch({ type: "trending", payload: {trending}});
  // };

  useEffect(() => {
    async function loadMovies() {
      const trending = await getTrendingMovies();
      console.log("trending: ", trending);
      const movies = await getMovies();
      console.log("movies: ", movies);
      const upcoming = await getUpcomingMovies();
      console.log("upcoming movies: ", upcoming);
      dispatch({
        type: "load-movies",
        payload: { upcoming, trending, movies },
      });
    }

    loadMovies();
  }, []);

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        favorites: state.favorites,
        trending: state.trending,
        upcoming: state.upcoming,
        addToFavorites: addToFavorites,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
