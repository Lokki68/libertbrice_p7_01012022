import axios from 'axios';
import { config } from '../../utils/config';
export const GET_USERS = 'GET_USERS';

export const getUsers = () => {
  return (dispatch) => {
    return axios
      .get(`${config.API_REACT}/api/user`)
      .then((res) => {
        dispatch({ type: GET_USERS, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
