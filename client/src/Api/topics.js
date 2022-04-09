import axios from 'axios';

export const getPosts = () => {
  return axios
    .get('http://localhost:8080/api/post')
    .then((res) => console.log(res.data))
    .catch((err) => console.log({ err: err.message }));
};
