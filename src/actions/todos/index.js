import * as types from './types';

export const setTodosLoading = () => ({
  type: types.TODOS_LOADING,
});

export const setTodosLoaded = payload => ({
  type: types.TODOS_LOADED,
  payload,
});

export const setTodoCompletedState = (todoId, isCompleted) => ({
  type: types.SET_TODO_COMPLETED_STATE,
  payload: { todoId, isCompleted },
});
