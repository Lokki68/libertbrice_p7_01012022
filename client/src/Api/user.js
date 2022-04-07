import axios from 'axios';

export const getAllUsers = () => {
  return axios
    .get('http://localhost:8080/api/user/')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const saveUser = (data) => {
  return axios
    .post(`http://localhost:8080/api/auth/signup`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const loginUser = (data) => {
  return axios
    .post(`http://localhost:8080/api/auth/login`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const checkToken = (data) => {
  return axios
    .post(`http://localhost:8080/api/auth/checkToken`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};
