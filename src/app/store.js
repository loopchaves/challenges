import { configureStore } from '@reduxjs/toolkit';
import challengesReducer from './challengeSlice';
import asideReducer from './asideSlice';

export const store = configureStore({
  reducer: {
    challenge: challengesReducer,
    aside: asideReducer
  }
});
