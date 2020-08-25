import React, { createContext, useReducer } from "react";

export const CastContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-cast-favorite":
      // remove the cast member from the cast array
      state.cast = state.cast.filter((m) => m.id !== action.payload.cast.id);
      // if the cast member is not already in the castfavorites array add
      // the cast member to it (favindex will be -1 if the cast member is not
      // in the castfavorites array already)
      if (action.payload.favindex < 0) {
        state.castfavorites = [...state.castfavorites, action.payload.cast];
      }
      return {
        cast: [...state.cast],
        castfavorites: [...state.castfavorites],
      };

    case "load-cast":
      return {
        cast: [...action.payload.cast],
        castfavorites: [],
      };
      break;
    default:
      return state;
  }
};

const CastContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {
    cast: [],
    castfavorites: [],
  });

  const addToCastFavorites = (id) => {
    // Get the array index in any of the states if the cast member appears in it
    const favindex = state.castfavorites.map((m) => m.id).indexOf(id);
    const castindex = state.cast.map((m) => m.id).indexOf(id);

    // return the cast object and the favindex value which should be either -1
    // or a whole number if it is -1 - the cast member is already in the castfavorites array
    // otherwise the cast member is not in the array already
    dispatch({
      type: "add-cast-favorite",
      payload: {
        favindex: favindex,
        cast: state.cast[castindex],
      },
    });
  };

  const loadCast = (cast) => {
    dispatch({ type: "load-cast", payload: { cast } });
  };

  return (
    <CastContext.Provider
      value={{
        cast: state.cast,
        castfavorites: state.castfavorites,
        addToCastFavorites: addToCastFavorites,
        loadCast: loadCast,
      }}
    >
      {props.children}
    </CastContext.Provider>
  );
};

export default CastContextProvider;
