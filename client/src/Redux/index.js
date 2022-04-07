import { configureStore } from '@reduxjs/toolkit';
import user from './User/userReducer';
import users from './User/usersReducer';

export const store = configureStore({
  reducer: {
    user,
    users,
  },
});
