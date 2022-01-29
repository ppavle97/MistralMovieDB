import { GET_MOVIES } from "../types";

export default (state: any, action: any) => {
  let { type, payload } = action;
  switch (type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: [...payload],
      };

    default:
      return state;
  }
};
