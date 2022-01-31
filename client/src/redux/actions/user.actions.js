import axios from 'axios';

export const GET_USER = 'GET_USER';
export const UPDATE_ONE = 'UPDATE_ONE';
export const DELETE_ONE = 'DELETE_ONE';

export const getUser = (uid) => {
  return (dispatch) => {
    return axios
      .get(`http://localhost:8080/api/user/${uid}`)
      .then((res) => {
        dispatch({ type: GET_USER, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const updateOne = (data, id) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:8080/api/user/${id}`, data)
      .then((res) => {
        console.log(res);
        return axios.get(`http://localhost:8080/api/user/${id}`).then((res) => {
          dispatch({ type: UPDATE_ONE, payload: res });
        });
      })
      .catch((err) => console.log(err));
  };
};

export const deleteOne = (id) => {
  return (dispatch) => {
    return axios
      .delete(`http://localhost:8080/api/user/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_ONE, payload: res });
      })
      .catch((err) => console.log(err));
  };
};
