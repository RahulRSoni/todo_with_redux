import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todoSlice.js';

export const store = configureStore({
	reducer: todoReducer,
});
