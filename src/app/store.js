import { ConfigureStore } from '@reduxjs/toolkit';
import todoReducer from '../feature/todoSlice.js';

export const store = ConfigureStore({
	reducer: todoReducer,
});
