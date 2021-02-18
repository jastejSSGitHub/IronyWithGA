import { configureStore } from '@reduxjs/toolkit';
import hoverReducer from '../features/hoverSlice';

export default configureStore({
  reducer: {
    hover: hoverReducer,
  },
});
