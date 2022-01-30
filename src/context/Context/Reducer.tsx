import { GET_MOVIES, SET_SELECTED_ITEM, GET_TV_SHOWS } from "../types";

export default (state: any, action: any) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };
    case GET_TV_SHOWS:
      return {
        ...state,
        tvShows: [...payload],
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: payload,
      };

    default:
      return state;
  }
};
