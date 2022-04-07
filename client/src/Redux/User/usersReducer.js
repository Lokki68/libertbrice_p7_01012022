import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsersReducer: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { getUsersReducer } = usersSlice.actions;

export default usersSlice.reducer;
