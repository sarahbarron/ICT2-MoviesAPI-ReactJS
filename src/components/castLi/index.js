import React from "react";
import Cast from "../castCard";

const CastList = ({ allcast, action }) => {
  try {
    const castCards = allcast.map((c) => (
      <Cast key={c.id} cast={c} action={action} />
    ));
    return <div className="row movies movie-list-bg">{castCards}</div>;
  } catch (e) {
    console.log("error retrieving cast members: ", e);
    return (
      <div className="error-msg">Unable to view Cast members at this time</div>
    );
  }
};

export default CastList;
