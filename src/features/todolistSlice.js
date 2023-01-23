import { createSlice } from "@reduxjs/toolkit";
import { StatusFilters } from "../utils/filters";


export const todosSlice = createSlice({
    name: 'todos',
    initialState: {newTodo: '', todoarr: [], filter: StatusFilters.All },
    reducers: {
        addTodo: (state, action) => {
            state.todoarr.push(action.payload)
        },
        removeTodo: (state, action) => {
            state.todoarr = state.todoarr.filter(t => t.id !== action.payload.id)
        },
        changeTodos: (state, action) => {
            state.todoarr = action.payload
        },
        clearCompleted: (state) => {
            state.todoarr = state.todoarr.filter(t => !t.completed)
        },
        toggleCompleted: (state, action) => {
            const todo = state.todoarr.find((todo) => todo.id === action.payload)
            todo.completed = !todo.completed 
        },
        toggleAll: (state, action) => {
            state.todoarr.forEach(todo => todo.completed = action.payload) 
        },
        changeFilter: (state, action) => {
            state.filter = action.payload
        },
    }
})


export const { addTodo, removeTodo, changeTodos, clearCompleted, toggleCompleted, toggleAll, changeFilter } = todosSlice.actions;

export default todosSlice.reducer;