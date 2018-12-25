import axios from "axios";

import { GET_MOVIES } from "./types";
import { GET_MOVIE } from "./types";

// Get movies
export const getMovies = movieSearch => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=d2246439&s=${movieSearch}`)
    .then(res => {
      console.log(res.data.Search);
      dispatch({
        type: GET_MOVIES,
        payload: res.data.Search
      });
    })
    .catch(err => console.log(err));
};

// Get movie by id
export const getMovieById = id => dispatch => {
  axios
    .get(`http://www.omdbapi.com/?apikey=d2246439&i=${id}`)
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: GET_MOVIE,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
