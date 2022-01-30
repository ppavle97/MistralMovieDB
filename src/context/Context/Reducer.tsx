import { GET_MOVIES, SET_SELECTED_ITEM } from "../types";

export default (state: any, action: any) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
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
