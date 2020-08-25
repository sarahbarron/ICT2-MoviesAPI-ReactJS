import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import CastDetails from "../components/castDetails";
import PageCastTemplate from "../components/templateCastPage";
import usePerson from "../hooks/usePerson";

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
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default withRouter(CastDetailsPage);
