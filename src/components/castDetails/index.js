import React from "react";
import "./cast.css";
import AddCastFavoritesButton from "../../components/buttons/AddCastFavorites";
export default ({ person }) => {
  try {
    return (
      <>
        <div id="movie-details" className="opacity-div">
          <h4>Biography</h4>
          <p>{person.biography}</p>

          <ul className="list-group list-group-horizontal">
            <li key="pch" className="list-group-item list-group-item-dark">
              Name
            </li>
            <li key="nm" className="list-group-item cast-item">
              {person.name}
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li key="dob" className="list-group-item list-group-item-dark">
              Date Of Birth
            </li>
            <li key="db" className="list-group-item cast-item">
              {person.birthday}
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li key="dod" className="list-group-item list-group-item-dark">
              Date of Death
            </li>
            <li key="dd" className="list-group-item cast-item">
              {person.deathday}
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li key="pob" className="list-group-item list-group-item-dark">
              Place of Birth
            </li>
            <li key="pb" className="list-group-item cast-item">
              {person.place_of_birth}
            </li>
          </ul>
          <ul className="list-group list-group-horizontal">
            <li key="pop" className="list-group-item list-group-item-dark">
              Popularity
            </li>
            <li key="pp" className="list-group-item cast-item">
              {person.popularity}
            </li>
          </ul>
          <AddCastFavoritesButton person={person} />
        </div>
      </>
    );
  } catch (e) {
    console.log("error retrieving cast member", e);
    return (
      <div className="error-msg">
        We seem to be having problems displaying this movie
      </div>
    );
  }
};
