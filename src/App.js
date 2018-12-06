import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Goals from './components/Goals';
import TodosContainer from './components/TodosList';
import getTodos from './thunks/getTodos';

import './App.css';

class App extends Component {
  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className="App">
        <h1>Ostmodern React Exercise</h1>
        <Goals />
        <h2>List of Todos</h2>
        <TodosContainer />
      </div>
    );
  }
}

App.propTypes = {
  getTodos: PropTypes.func.isRequired,
};

export default connect(
  null,
  { getTodos },
)(App);
