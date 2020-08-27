import React, { useEffect, useState } from "react";
import { getCastMovies } from "../../api/tmdb-api";
import MovieList from "../../components/movieList";
import CustomLinkButton from "../../components/buttons/customLinkButton";

export default ({ person }) => {
  const [castmovies, setCastmovies] = useState([]);

  useEffect(() => {
    if (person) {
      getCastMovies(person.id).then((castmovies) => {
        setCastmovies(castmovies);
      });
    }
  }, []);

  return (
    <MovieList
      movies={castmovies}
      // action={(movie) => <MovieDetailsButton movie={movie} />}

      action={(movie) => (
        <CustomLinkButton
          className="btn w-100 btn-warning "
          to={{
            pathname: `/movies/${movie.id}`,
            state: {
              movie: movie,
            },
          }}
        >
          <p> More Details... </p>
        </CustomLinkButton>
      )}
    />
  );
};
