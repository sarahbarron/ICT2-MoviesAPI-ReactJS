export const getMovies = () => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getMovie = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}`
  ).then((res) => res.json());
};

export const getGenres = () => {
  return fetch(
    "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
      process.env.REACT_APP_TMDB_KEY +
      "&language=en-US"
  )
    .then((res) => res.json())
    .then((json) => json.genres);
};
export const getMovieReviews = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

//  New Endpoints added after lab work

export const getTrendingMovies = async () => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=2`
  );
  const res = await fetchResponse.json();
  const json = res.results;
  return json;
};

export const getUpcomingMovies = async () => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&page=1`
  );
  const res = await fetchResponse.json();
  const json = res.results;
  return json;
};

export const getGenreMovies = (id) => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getSearchMovies = (input) => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&query=${input}&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((json) => json.results);
};

export const getCast = async (id) => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_TMDB_KEY}`
  );
  const res = await fetchResponse.json();
  const json = res.cast;
  return json;
};

export const getPerson = async (id) => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/person/${id}?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const res = await fetchResponse.json();
  return res;
};

export const getCastMovies = async (id) => {
  const fetchResponse = await fetch(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US`
  );
  const res = await fetchResponse.json();
  const json = res.cast;
  console.log("get cast movies: ", json);
  return json;
};
