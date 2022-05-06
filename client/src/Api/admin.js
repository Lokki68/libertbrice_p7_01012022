import axios from "axios";


export const deleteAdmin = id => {
  return axios
    .delete(`http://localhost:8080/api/admin/${id}`)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}

export const saveAdmin = (id, data) => {
  return axios
    .post(`http://localhost:8080/api/admin/${id}`, data)
    .then(res => res.data)
    .catch(err => console.log({err: err.message}))
}