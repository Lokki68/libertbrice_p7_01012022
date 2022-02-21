import { config } from '../../utils/config';
import axios from 'axios';

export const GET_USER = 'GET_USER';
export const UPDATE_ONE = 'UPDATE_ONE';
export const DELETE_ONE = 'DELETE_ONE';

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`${config.API_REACT}/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateOne = (id, data) => {
  return (dispatch) => {
    return axios
      .put(`${config.API_REACT}/user/${id}`, data)
      .then((res) => {
        return axios.get(`${config.API_REACT}/user/${id}`).then((res) => {
          dispatch({ type: UPDATE_ONE, payload: res });
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteOne = (id) => {
  return (dispatch) => {
    return axios
      .delete(`${config.API_REACT}/user/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_ONE, payload: res });
      })
      .catch((err) => console.log(err));
  };
};
