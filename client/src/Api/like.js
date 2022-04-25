import axios from "axios";


export const createLike = (postId, data) => {
  return axios
    .post(`http://localhost:8080/api/like/${postId}`, data)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}

export const deleteLike = ( data) => {
  return axios
    .delete(`http://localhost:8080/api/like`, data)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}