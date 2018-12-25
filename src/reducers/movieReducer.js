import { GET_MOVIES } from "../actions/types";
import { GET_MOVIE } from "../actions/types";

const initialState = {
  movies: [],
  movie: {}
};

export default function(state = initialState, action) {
  // console.log(action.payload);
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    case GET_MOVIE:
      return {
        ...state,
        movie: action.payload
      };

    default:
      return state;
  }
}
