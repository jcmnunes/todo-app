import React from 'react';
import { shallow } from 'enzyme';
import Goals from './Goals';
import Goal from './Goal';

jest.mock('../../data/goals', () => {
  return [
    {
      id: 'goal#1',
      description: 'Mock description #1',
      comment: 'Mock comment #1',
    },
    {
      id: 'goal#2',
      description: 'Mock description #2',
      comment: 'Mock comment #2',
    },
  ];
});
jest.mock('./Goal', () => 'Goal');

describe('Goals component', () => {
  it('Renders the Goals component', () => {
    const wrapper = shallow(<Goals />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders the correct number of goals with the right props', () => {
    const wrapper = shallow(<Goals />);
    const goalsList = wrapper.find('Goal');

    expect(goalsList.length).toBe(2);
    expect(goalsList.first().props().id).toBe('goal#1');
    expect(goalsList.first().props().description).toBe('Mock description #1');
    expect(goalsList.first().props().comment).toBe('Mock comment #1');
  });
});
