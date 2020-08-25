import React from "react";
import CastHeader from "../headerCast";

const TemplateCastPage = ({ person, children }) => {
  try {
    return (
      <>
        <CastHeader person={person} />
        <div className="row">
          <div className="col-3">
            <img
              src={
                person.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${person.profile_path}`
                  : "./film-poster-placeholder.png"
              }
              className="movie"
              alt={person.name}
            />
          </div>
          <div className="col-9">{children}</div>
        </div>
      </>
    );
  } catch (e) {
    console.log("error rendering template cast page: ", e);
    return (
      <div className="error-msg">
        <p>Error rendering the cast page</p>
      </div>
    );
  }
};

export default TemplateCastPage;
