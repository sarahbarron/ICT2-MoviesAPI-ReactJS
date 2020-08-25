import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../globals/fontawesome";
const CastHeader = ({ person }) => {
  try {
    return (
      <div className="row opacity-div">
        <div className="col-6 offset-3">
          <h2>
            {person.name}
            {"  "}
            <a href={person.homepage}>
              <FontAwesomeIcon icon={["fas", "home"]} size="1x" />
            </a>
          </h2>
        </div>
      </div>
    );
  } catch (e) {
    console.log("error getting cast header: ", e);
    return (
      <div className="row opacity-div">
        <div className="col-6 offset-3"></div>
      </div>
    );
  }
};

export default CastHeader;
