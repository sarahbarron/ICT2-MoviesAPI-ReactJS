import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import MovieReviews from "../components/movieReviews";
import useMovie from "../hooks/useMovie";
import CastList from "../components/castList";
const MoviePage = (props) => {
  const { id } = props.match.params;
  const [movie] = useMovie(id); // NEW

  return (
    <>
      {movie ? (
        <>
          <PageTemplate movie={movie}>
            <MovieDetails movie={movie} />
          </PageTemplate>
          <div className="row marg">
            <div className="col-6 ">
              {!props.history.location.pathname.endsWith("/reviews") ? (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/movies/${id}/reviews`}
                >
                  Show Reviews (Extracts)
                </Link>
              ) : (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/movies/${id}`}
                >
                  Hide Reviews
                </Link>
              )}
            </div>

            <div className="col-6 ">
              {!props.history.location.pathname.endsWith("/cast") ? (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/movies/${id}/cast`}
                >
                  Show Cast
                </Link>
              ) : (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/movies/${id}`}
                >
                  Hide Cast
                </Link>
              )}
            </div>
          </div>
          <Route
            path={`/movies/:id/reviews`}
            render={(props) => <MovieReviews movie={movie} {...props} />}
          />
          <Route
            path={`/movies/:id/cast`}
            render={(props) => <CastList movie={movie} {...props} />}
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(MoviePage);
