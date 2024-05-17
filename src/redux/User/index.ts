import axios from 'axios';
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InitialState, User } from '../../redux/User/types'

export const fetchUsers = createAsyncThunk('User/fetchUsers', async () => {
  try {
    const response = await axios.get<User[]>('http://localhost:3001/users');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const initialState: InitialState = {
  users: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});



export default userSlice.reducer;

// ...
