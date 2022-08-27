import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false
}

export const asideSlice = createSlice({
  name: 'aside',
  initialState,
  reducers: {
    toggleShow: (state) => {
      state.show = !state.show;
    }
  }
});

export const { toggleShow } = asideSlice.actions;

export default asideSlice.reducer;