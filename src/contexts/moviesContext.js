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
      // if the film is in the trending movies remove it
      if (action.payload.trendingmovie) {
        state.trending = state.trending.filter(
          (m) => m.id !== action.payload.trendingmovie.id
        );
      }
      // if the film is in the home page movies remove it
      if (action.payload.movie) {
        state.movies = state.movies.filter(
          (m) => m.id !== action.payload.movie.id
        );
      }
      // if the film is in the upcoming movies remove it
      if (action.payload.upcomingmovie) {
        state.upcoming = state.upcoming.filter(
          (m) => m.id !== action.payload.upcomingmovie.id
        );
      }
      // if the film is in the genre movies remove it
      if (action.payload.genremovie) {
        state.genremovies = state.genremovies.filter(
          (m) => m.id !== action.payload.genremovie.id
        );
      }
      // if the film is not already in the favorites page add it
      if (action.payload.favindex < 0) {
        state.favorites = [...state.favorites, action.payload.favmovie];
      }

      return {
        trending: [...state.trending],
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        genremovies: [...state.genremovies],
        favorites: [...state.favorites],
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

  const addToFavorites = (movieId) => {
    // Get the array index in any of the states if the film appears in it
    const favindex = state.favorites.map((m) => m.id).indexOf(movieId);
    const movieindex = state.movies.map((m) => m.id).indexOf(movieId);
    const trendingindex = state.trending.map((m) => m.id).indexOf(movieId);
    const upcomingindex = state.upcoming.map((m) => m.id).indexOf(movieId);
    const genremoviesindex = state.genremovies
      .map((m) => m.id)
      .indexOf(movieId);
    let favmovie = {};
    // get the favorite movie just once from the first state array it appears in
    if (movieindex >= 0) {
      favmovie = state.movies[movieindex];
    } else if (trendingindex >= 0) {
      favmovie = state.trending[trendingindex];
    } else if (upcomingindex >= 0) {
      favmovie = state.upcoming[upcomingindex];
    } else if (genremoviesindex >= 0) {
      favmovie = state.genremovies[genremoviesindex];
    }

    // return the movie if it appears in the array or
    // undefined if it doesn't
    // also return the favorite movie and index if it appears in the
    // favorite movies array otherwise return -1
    dispatch({
      type: "add-favorite",
      payload: {
        favmovie: favmovie,
        favindex: favindex,
        movie: state.movies[movieindex],
        trendingmovie: state.trending[trendingindex],
        upcomingmovie: state.upcoming[upcomingindex],
        genremovie: state.genremovies[genremoviesindex],
      },
    });
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
