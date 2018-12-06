import React from 'react';
import { shallow } from 'enzyme';
import Todo from './Todo';

describe('Todo component', () => {
  const props = {
    id: 1,
    title: 'mock title',
    completed: true,
    onChange: () => {},
  };

  it('Renders the Todo component', () => {
    const wrapper = shallow(<Todo {...props} />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders the checkbox in the checked state when the todo is completed', () => {
    let wrapper = shallow(<Todo {...props} />);

    const checkbox = wrapper.find({ type: 'checkbox' });
    expect(checkbox.props().checked).toBe(true);
  });

  it('Renders the checkbox in the unchecked state when the todo is not completed', () => {
    const newProps = {
      ...props,
      completed: false,
    };
    let wrapper = shallow(<Todo {...newProps} />);

    const checkbox = wrapper.find({ type: 'checkbox' });
    expect(checkbox.props().checked).toBe(false);
  });

  it('Calls the onChange prop function on checkbox change', () => {
    const handleOnChange = jest.fn();

    const newProps = {
      ...props,
      onChange: handleOnChange,
    };
    let wrapper = shallow(<Todo {...newProps} />);
    const checkbox = wrapper.find({ type: 'checkbox' });

    const event = { target: { checked: true } };
    checkbox.simulate('change', event);

    expect(handleOnChange.mock.calls.length).toBe(1);
    expect(handleOnChange).toHaveBeenCalledWith(newProps.id, event.target.checked);
  });
});
