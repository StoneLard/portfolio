import { configureStore } from '@reduxjs/toolkit';
import enlearnReducer from '../features/enlearnSlice';
import todosReducer from '../features/todolistSlice';
import tictactoeReducer from '../features/tttSlice'

export const store = configureStore({
  reducer: {
    enlearn: enlearnReducer,
    todos: todosReducer,
    tictactoe: tictactoeReducer,
  },
});
