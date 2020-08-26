import React, { useState } from "react";
import HeaderCastList from "../headerCastList";
import CastCardList from "../castCardList";
import FilterCastControls from "../filterCastControls";

const FavoriteCastTemplate = ({ cast, title, action }) => {
  const [nameFilter, setNameFilter] = useState("");

  let displayedCast = cast.filter((m) => {
    return m.name.toLowerCase().search(nameFilter.toLowerCase()) !== -1;
  });

  const handleChange = (type, value) => {
    setNameFilter(value);
  };

  return (
    <>
      <HeaderCastList title={title} numCast={displayedCast.length} />
      <FilterCastControls
        onUserInput={handleChange}
        numCast={displayedCast.length}
      />
      <CastCardList action={action} cast={displayedCast} />
    </>
  );
};

export default FavoriteCastTemplate;
