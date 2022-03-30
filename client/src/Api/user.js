import axios from 'axios';

export const saveUser = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/signup`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const loginUser = (data) => {
  return axios
    .post(`${process.env.REACT_APP_API_URL}/user/login`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
}
