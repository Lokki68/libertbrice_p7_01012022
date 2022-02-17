import axios from 'axios';
import { config } from '../../utils/config';
export const GET_POSTS = 'GET_POSTS';
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const UPDATE_POST = 'UPDATE_POST';

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

export const createPost = (data) => {
  return (dispatch) => {
    return axios
      .post(`${config.API_REACT}/post`, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: CREATE_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updatePost = (postId, data) => {
  return (dispatch) => {
    return axios
      .put(`${config.API_REACT}/post/${postId}`, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: UPDATE_POST, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
