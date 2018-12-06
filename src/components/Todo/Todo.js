import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Todo.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { id, onChange } = this.props;
    const { target } = event;
    const value = target.checked;

    onChange(id, value);
  }

  render() {
    const { id, title, completed } = this.props;
    return (
      <div className="Todo">
        <input
          checked={completed}
          id={id}
          name={id}
          onChange={this.handleInputChange}
          type="checkbox"
          value={id}
        />
        <label className={completed ? 'Todo--completed' : undefined} htmlFor={id}>
          {title}
        </label>
        <span className="Todo__id">id: {id}</span>
      </div>
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Todo;
