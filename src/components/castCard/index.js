import React from "react";
import { Link } from "react-router-dom";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CastCard = ({ cast, action }) => {
  try {
    return (
      <div id="card-column" className="col-sm-3">
        <div className="card card-container  bg-white">
          <Link to={`/person/${cast.id}`}>
            <img
              className="card-img-tag center "
              alt={cast.name}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : "./film-poster-placeholder.png"
              }
            />
          </Link>
          <div className="card-body">
            <h4 className="card-title ">{cast.name}</h4>
          </div>
          <div className="card-footer">{action(cast)}</div>
        </div>
      </div>
    );
  } catch (e) {
    console.log("Cast Card Error: ", e);
    return <div className="error-msg">Cast Member unavailable</div>;
  }
};

export default CastCard;
