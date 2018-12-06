import React, { Component } from 'react';
import goalsData from '../../data/goals';
import Goal from './Goal';

import './Goals.css';

class Goals extends Component {
  render() {
    return (
      <div className="Goals">
        <div>This exercise had the following goals:</div>
        {goalsData.map(goal => (
          <Goal key={goal.id} {...goal} />
        ))}
      </div>
    );
  }
}

export default Goals;
