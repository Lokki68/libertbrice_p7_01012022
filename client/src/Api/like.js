import axios from "axios";


export const createLike = (dataLike) => {
  return axios
    .post(`http://localhost:8080/api/like`, dataLike)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}

export const deleteLike = (id) => {
  return axios
    .delete(`http://localhost:8080/api/like/${id}`, )
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}