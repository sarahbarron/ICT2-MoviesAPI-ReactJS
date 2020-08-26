import React from "react";
import CastCard from "../castCard";

const CastCardList = ({ cast, action }) => {
  try {
    const castCards = cast.map((m) => (
      <CastCard key={m.id} cast={m} action={action} />
    ));
    return <div className="row movies movie-list-bg">{castCards}</div>;
  } catch (e) {
    console.log("error retrieving cast members: ", e);
    return <div className="error-msg">Unable to view Movies at this time</div>;
  }
};

export default CastCardList;
