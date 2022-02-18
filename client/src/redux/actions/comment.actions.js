import axios from 'axios';
import { config } from '../../utils/config';

export const CREATE_COMMENT = 'CREATE_COMMENT';

export const createComment = (postId, data) => {
  return (dispatch) => {
    axios
      .post(`${config.API_REACT}/comment/${postId}`, data)
      .then((res) => {
        console.log(res);
        dispatch({ type: CREATE_COMMENT, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};
