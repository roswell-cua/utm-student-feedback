/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';

import Avatar from '../client/components/Avatar';

describe('Avatar Component', () => {
  it('should render an image when given an avatar', () => {
    const wrapper = shallow(<Avatar avatar="localhost:3000/smiley.png" />);

    expect(wrapper.containsMatchingElement(<img src="localhost:3000/smiley.png" alt="avatar" />)).toBe(true);
  });

  it('should render initials when given a name', () => {
    const wrapper = shallow(<Avatar username="Sam Deuter" />);

    expect(wrapper.text()).toBe('SD');
  });

  it('should not render initials when given both a name and avatar', () => {
    const wrapper = shallow(<Avatar avatar="localhost:3000/smiley.png" username="Sam Deuter" />);

    expect(wrapper.text()).not.toBe('SD');
  });
});
