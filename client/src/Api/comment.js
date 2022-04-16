import axios from 'axios';

export const createComment = (postId, data) => {
  return axios
    .post(`http://localhost:8080/api/comment/${postId}`, data)
    .then((res) => res.data)
    .catch((err) => console.log({ err: err.message }));
};
