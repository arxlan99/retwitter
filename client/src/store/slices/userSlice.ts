import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
interface UserState {
  name: string;
  _id: string;
}

// Define the initial state using that type
const initialState: UserState = {
  name: '',
  _id: '',
};

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUser: (state, action: PayloadAction<any>) => {
      state.name = action.payload?.name || '';
      state._id = action.payload?._id || '';
    },
  },
});

export const { addUser } = userSlice.actions;

export default userSlice.reducer;
