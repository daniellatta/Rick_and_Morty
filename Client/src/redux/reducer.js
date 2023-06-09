import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-type";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: payload,
        allCharacters: payload,
      };
    case FILTER:
      return {
        ...state,
        myFavorites:
          payload === "allCharacters"
            ? [...state.allCharacters]
            : [...state.allCharacters].filter(
                (character) => character.gender === payload
              ),
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          payload === "A"
            ? [...state.allCharacters].sort((a, b) => a.id - b.id)
            : [...state.allCharacters].sort((a, b) => b.id - a.id),
      };

    default:
      return { ...state };
  }
};

export default reducer;
