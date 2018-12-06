import todosReducer from './todosReducer';
import * as actions from '../actions/todos';
import initialState from './initialState';

const state = initialState.todos;

describe('Todos reducer', () => {
  it('should set the loading flag to true when passed TODOS_LOADING', () => {
    const action = actions.setTodosLoading();
    const newState = todosReducer(state, action);
    expect(newState.isLoading).toBe(true);
  });

  it('should set the loading flag to false when passed TODOS_LOADED', () => {
    const todos = [
      {
        completed: false,
        id: 1,
        title: 'delectus aut autem',
        userId: 1,
      },
    ];
    const action = actions.setTodosLoaded(todos);
    const newState = todosReducer(state, action);
    expect(newState.isLoading).toBe(false);
    expect(newState.todos).toBe(todos);
  });

  it('should set the todo completed state when passed SET_TODO_COMPLETED_STATE', () => {
    const currentState = {
      ...state,
      todos: [
        {
          completed: false,
          id: 1,
          title: 'delectus aut autem',
          userId: 1,
        },
      ],
    };

    const todoId = 1;
    const isCompleted = true;
    const action = actions.setTodoCompletedState(todoId, isCompleted);

    const newState = todosReducer(currentState, action);
    expect(newState.todos[0].completed).toBe(true);
  });
});
