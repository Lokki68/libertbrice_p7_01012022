import { configureStore } from '@reduxjs/toolkit';
import user from './User/userReducer';

export const store = configureStore({
  reducer: {
    user,
  },
});
