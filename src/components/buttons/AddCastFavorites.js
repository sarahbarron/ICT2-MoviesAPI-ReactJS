import React, { useState, useContext } from "react";
import { CastContext } from "../../contexts/castContext";

const AddCastFavoritesButton = ({ person }) => {
  const [buttonText, setButtonText] = useState("Add to Favorites");
  const context = useContext(CastContext);

  const handleAddToCastFavorite = (e) => {
    if (buttonText === "Add to Favorites") {
      e.preventDefault();
      context.addToCastFavorites(person.id);
      setButtonText(`${person.name} has been added to your favorites`);
    }
  };
  try {
    return (
      <button
        type="button"
        className="btn w-100 btn-success fav-button"
        onClick={handleAddToCastFavorite}
      >
        {buttonText}
      </button>
    );
  } catch (e) {
    console.log("Favorite Cast Button Error: ", e);
    return <div className="error-msg">Button unavailable</div>;
  }
};

export default AddCastFavoritesButton;
