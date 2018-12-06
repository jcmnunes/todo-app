import React from 'react';
import { shallow } from 'enzyme';
import Goal from './Goal';

describe('Goals component', () => {
  const props = {
    description: 'mock description',
    comment: 'mock comment',
  };

  it('Renders the Goal component', () => {
    const wrapper = shallow(<Goal {...props} />);

    expect(wrapper.length).toBe(1);
  });

  it('Renders the description and the comment', () => {
    const wrapper = shallow(<Goal {...props} />);

    const comment = wrapper.find('.Goal__comment');
    expect(comment.text()).toBe(props.comment);
  });
});
