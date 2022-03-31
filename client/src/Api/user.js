import axios from 'axios';

export const saveUser = (data) => {
  return axios
    .post(`http://localhost:8080/api/user/signup`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const loginUser = (data) => {
  return axios
    .post(`http://localhost:8080/api/user/login`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};
