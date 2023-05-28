import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Купити молоко"},
    { id: 2, text: "Прибрати в кімнаті"},
    { id: 3, text: "Погуляти з собакою" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random() * 100,
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;