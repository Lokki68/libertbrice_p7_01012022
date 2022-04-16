import { configureStore } from '@reduxjs/toolkit';
import user from './User/userReducer';
import users from './User/usersReducer';
import posts from './Posts/postsReducer';
import post from './Posts/postReducers';

export const store = configureStore({
  reducer: {
    user,
    users,
    posts,
    post,
  },
});
