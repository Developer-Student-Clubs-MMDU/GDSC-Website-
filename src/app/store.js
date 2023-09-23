import { configureStore } from '@reduxjs/toolkit';
import eventReducer from '../features/EventSlice/EventSlice';

export const store = configureStore({
  reducer: {
    eventReducer: eventReducer,
  },
});
