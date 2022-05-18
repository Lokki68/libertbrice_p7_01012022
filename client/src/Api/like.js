import axios from "axios";
import {environnement} from "../environnements/environnement";


export const createLike = (dataLike) => {
  return axios
    .post(`${environnement.apiUrl}/like`, dataLike)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}

export const deleteLike = (id) => {
  return axios
    .delete(`${environnement.apiUrl}/like/${id}`, )
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}