/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Star from '../client/components/Star';

describe('Star Component', () => {
  it('should render a svg', () => {
    const wrapper = shallow(<Star />);

    expect(wrapper.containsMatchingElement(<svg />)).toBe(true);
  });

  it('it should fill a default color', () => {
    const wrapper = shallow(<Star />);

    expect(wrapper.find('[fill="#dedfe0"]')).toBe(true);
  });

  it('it should fill a highlighted color', () => {
    const wrapper = shallow(<Star highlighted />);

    expect(wrapper.find('[fill="#f4c150"]')).toBe(true);
  });
});
