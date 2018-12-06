import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Todo from '../Todo';
import { setTodoCompletedState } from '../../actions/todos';

class TodosList extends Component {
  render() {
    const { todos, isLoading, setTodoCompletedState } = this.props;
    return isLoading ? (
      <div>Loading...</div>
    ) : (
      <div>
        {todos.map(todo => (
          <Todo key={todo.id} onChange={setTodoCompletedState} {...todo} />
        ))}
      </div>
    );
  }
}

TodosList.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  setTodoCompletedState: PropTypes.func.isRequired,
  todos: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isLoading: state.todos.isLoading,
  todos: state.todos.todos,
});

export default connect(
  mapStateToProps,
  { setTodoCompletedState },
)(TodosList);
