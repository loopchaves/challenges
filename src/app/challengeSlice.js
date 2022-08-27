import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  title: '',
  fem: '',
  build: [],
  screenshots: []
}

export const challengeSlice = createSlice({
  name: 'challenge',
  initialState,
  reducers: {
    change: (state, action) => {
      state.name = action.payload.name;
      state.title = action.payload.title;
      state.fem = action.payload.fem;
      state.build = action.payload.build;
      state.screenshots = action.payload.screenshots;
    }
  }
});

export const { change } = challengeSlice.actions;

export default challengeSlice.reducer;