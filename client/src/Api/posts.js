import axios from 'axios';

export const getAllPosts = () => {
  return axios
    .get('http://localhost:8080/api/post')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const getOnePost = (id) => {
  return axios
    .get(`http://localhost:8080/api/post/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log({ err: err.message }));
};

export const createPost = (data) => {
  return axios
    .post('http://localhost:8080/api/post', data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};

export const deletePost = (id) => {
  return axios
    .delete(`http://localhost:8080/api/post/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => console.log({ err: err.message }));
};
