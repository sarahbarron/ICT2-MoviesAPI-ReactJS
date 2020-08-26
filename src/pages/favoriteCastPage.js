import React, { useContext } from "react";
import FavoriteCastTemplate from "../components/templateFavoriteCastPage";
import ViewPersonButton from "../components/buttons/viewPerson";
import { CastContext } from "../contexts/castContext";

const FavoriteCastPage = (props) => {
  const context = useContext(CastContext);
  try {
    return (
      <FavoriteCastTemplate
        cast={context.castfavorites}
        title={"Favorite Actors and Actresses"}
        action={(person) => <ViewPersonButton person={person} />}
      />
    );
  } catch (e) {
    console.log("error with favorite cast page: ", e);
    return <div className="error-msg">Error returning favorite cast page</div>;
  }
};

export default FavoriteCastPage;
