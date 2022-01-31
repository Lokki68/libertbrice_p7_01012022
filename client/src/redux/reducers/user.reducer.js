import { GET_USER, UPDATE_ONE, DELETE_ONE } from '../actions/user.actions';

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;

    case UPDATE_ONE:
      return {
        ...state,
        data: action.payload,
      };

    case DELETE_ONE:
      return {
        data: action.payload,
      };

    default:
      return state;
  }
}
