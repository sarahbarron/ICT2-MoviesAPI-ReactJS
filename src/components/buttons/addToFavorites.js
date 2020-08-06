import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";

const AddToFavoriteButton = ({ movie, movieGroup }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = (e) => {
    e.preventDefault();
    context.addToFavorites(movie.id, movieGroup);
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
};

export default AddToFavoriteButton;
