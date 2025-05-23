import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice';
import todosReducer from './slices/todosSlice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
});

export default store;
