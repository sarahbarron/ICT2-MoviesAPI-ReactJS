import React, { useEffect, createContext, useReducer } from "react";
import {
  getMovies,
  getTrendingMovies,
  getUpcomingMovies,
} from "../api/tmdb-api";
// import useGenre from "../hooks/useGenre";
export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite-movies":
      return {
        trending: [...state.trending],
        upcoming: [...state.upcoming],
        genremovies: [...state.genremovies],
        movies: state.movies.filter((m) => m.id !== action.payload.movie.id),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "add-favorite-trending":
      return {
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        genremovies: [...state.genremovies],
        trending: state.trending.filter(
          (m) => m.id !== action.payload.movie.id
        ),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "add-favorite-upcoming":
      return {
        trending: [...state.trending],
        movies: [...state.movies],
        genremovies: [...state.genremovies],
        upcoming: state.upcoming.filter(
          (m) => m.id !== action.payload.movie.id
        ),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "add-favorite-genre":
      return {
        trending: [...state.trending],
        movies: [...state.movies],
        upcoming: [...state.genremovies],
        genremovies: state.genremovies.filter(
          (m) => m.id !== action.payload.movie.id
        ),
        favorites: [...state.favorites, action.payload.movie],
      };
    case "load-movies":
      return {
        movies: [...action.payload.movies],
        trending: [...action.payload.trending],
        upcoming: [...action.payload.upcoming],
        genremovies: [...state.genremovies],
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
    case "load-genre-movies":
      return {
        genremovies: [...action.payload.movies],
        movies: [...state.movies],
        trending: [...state.trending],
        upcoming: [...state.upcoming],
        favorites: [...state.favorites],
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
    genremovies: [],
  });

  const addToFavorites = (movieId, movieGroup) => {
    console.log("Movie Group: ", movieGroup);
    if (movieGroup === "movies") {
      const index = state.movies.map((m) => m.id).indexOf(movieId);
      dispatch({
        type: "add-favorite-movies",
        payload: { movie: state.movies[index] },
      });
    } else if (movieGroup === "trending") {
      const index = state.trending.map((m) => m.id).indexOf(movieId);
      dispatch({
        type: "add-favorite-trending",
        payload: { movie: state.trending[index] },
      });
    } else if (movieGroup === "upcoming") {
      const index = state.upcoming.map((m) => m.id).indexOf(movieId);
      dispatch({
        type: "add-favorite-upcoming",
        payload: { movie: state.upcoming[index] },
      });
    } else if (movieGroup === "genre") {
      const index = state.genremovies.map((m) => m.id).indexOf(movieId);
      dispatch({
        type: "add-favorite-genre",
        payload: { movie: state.genremovies[index] },
      });
    }
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  const loadGenreMovies = (movies) => {
    dispatch({ type: "load-genre-movies", payload: { movies } });
  };

  useEffect(() => {
    async function loadMovies() {
      const trending = await getTrendingMovies();
      const movies = await getMovies();
      const upcoming = await getUpcomingMovies();
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
        genremovies: state.genremovies,
        addToFavorites: addToFavorites,
        addReview: addReview,
        loadGenreMovies: loadGenreMovies,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
