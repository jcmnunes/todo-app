import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Goal.css';

class Goal extends Component {
  render() {
    const { description, comment } = this.props;

    return (
      <div className="Goal">
        <div>
          <span role="img" aria-label="checkmark">
            ✅
          </span>{' '}
          {description}
        </div>
        <div className="Goal__comment">{comment}</div>
      </div>
    );
  }
}

Goal.propTypes = {
  description: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
};

export default Goal;
