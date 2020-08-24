import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToFavoriteButton = ({ movie }) => {
  try {
    const context = useContext(MoviesContext);

    const handleAddToFavorite = (e) => {
      e.preventDefault();
      context.addToFavorites(movie.id);
    };
    return (
      <button
        type="button"
        className="btn w-100 btn-warning"
        onClick={handleAddToFavorite}
      >
        Add to Favorites
      </button>
    );
  } catch (e) {
    console.log("Favorite Button Error: ", e);
    return <div className="error-msg">Button unavailable</div>;
  }
};

export default AddToFavoriteButton;
