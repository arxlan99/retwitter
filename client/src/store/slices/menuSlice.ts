import { createSlice } from '@reduxjs/toolkit';

// Define a type for the slice state
interface MenuState {
  open: boolean;
}

// Define the initial state using that type
const initialState: MenuState = {
  open: false,
};

export const userSlice = createSlice({
  name: 'menu',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggle: (state) => {
      console.log({ state });
      console.log('state.open', state.open);
      state.open = !state.open;
    },
  },
});

export const { toggle } = userSlice.actions;

export default userSlice.reducer;
