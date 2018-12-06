import * as types from '../actions/todos/types';
import initialState from './initialState';

export default (state = initialState.todos, action) => {
  switch (action.type) {
    case types.TODOS_LOADING:
      return { ...state, isLoading: true };
    case types.TODOS_LOADED:
      return { ...state, isLoading: false, todos: action.payload };
    case types.SET_TODO_COMPLETED_STATE:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.todoId
            ? { ...todo, completed: action.payload.isCompleted }
            : todo,
        ),
      };
    default:
      return state;
  }
};
