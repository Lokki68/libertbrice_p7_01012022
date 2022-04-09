import axios from 'axios';

export const getAllPosts = () => {
  return axios
    .get('http://localhost:8080/api/post')
    .then((res) => {
      return res.data;
    })
    .catch((err) => console.log({ err: err.message }));
};
