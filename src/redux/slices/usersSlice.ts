import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await axios.get('https://reqres.in/api/users?page=1');
  return res.data.data;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: { users: [], status: 'idle' },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = 'succeeded';
    });
  },
});

export default usersSlice.reducer;
