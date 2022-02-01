import axios from 'axios';
import { config } from '../../utils/config';
export const GET_POSTS = 'GET_POSTS';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';

export const getPosts = (num) => {
  return (dispatch) => {
    return axios
      .get(`${config.API_REACT}/post`)
      .then((res) => {
        const array = res.data.slice(0, num);
        dispatch({ type: GET_POSTS, payload: array });
        dispatch({ type: GET_ALL_POSTS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};