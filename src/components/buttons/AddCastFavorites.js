import React, { useState, useContext } from "react";
import { CastContext } from "../../contexts/castContext";

const AddCastFavoritesButton = ({ person }) => {
  const [favorite, setFavorite] = useState("Add to Favorites");
  const context = useContext(CastContext);

  const handleAddToCastFavorite = (e) => {
    if (favorite === "Add to Favorites") {
      e.preventDefault();
      context.addToCastFavorites(person.id);
      setFavorite(`${person.name} has been added to your favorites`);
    }
  };
  try {
    return (
      <button
        type="button"
        className="btn w-100 btn-success fav-button"
        onClick={handleAddToCastFavorite}
      >
        {favorite}
      </button>
    );
  } catch (e) {
    console.log("Favorite Cast Button Error: ", e);
    return <div className="error-msg">Button unavailable</div>;
  }
};

export default AddCastFavoritesButton;
