import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CastDetails from "../components/castDetails";
import PageCastTemplate from "../components/templateCastPage";
import usePerson from "../hooks/usePerson";
import CastMovies from "../components/castMovies";
const CastDetailsPage = (props) => {
  const { id } = props.match.params;
  const [person] = usePerson(id);

  return (
    <>
      {person ? (
        <>
          <PageCastTemplate person={person}>
            <CastDetails person={person} />
          </PageCastTemplate>
          <div className="row marg">
            <div className="col-12">
              {!props.history.location.pathname.endsWith(
                "/movies-appeared-in"
              ) ? (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/person/${id}/movies-appeared-in`}
                >
                  Show Movies {person.name} Has Appeared In
                </Link>
              ) : (
                <Link
                  className="btn btn-warning btn-block active"
                  to={`/person/${id}`}
                >
                  Hide Movies
                </Link>
              )}
            </div>
          </div>
          <Route
            path={`/person/:id/movies-appeared-in`}
            render={(props) => <CastMovies person={person} {...props} />}
          />
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(CastDetailsPage);
