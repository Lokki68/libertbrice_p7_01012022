import { configureStore } from '@reduxjs/toolkit';
import user from './User/userReducer';
import users from './User/usersReducer';
import posts from './Posts/postsReducer';

export const store = configureStore({
  reducer: {
    user,
    users,
    posts,
  },
});
