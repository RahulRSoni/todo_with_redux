import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = { todos: [{ id: 1 }, { text: 'hello world' }] };

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			console.log(state, action);
			const todo = {
				id: nanoid(),
				text: action.payload.text,
			};
			state.todos.push(todo);
		},
		removeTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => id !== action.payload);
			console.log(state.todos);
		},
		updateTodo: (state, action) => {
			state.todos = state.todos.filter((todo) => {
				if (id === action.payload.id) {
					todo.text = action.payload.text;
				}
			});
			console.log(state.todos);
		},
	},
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
