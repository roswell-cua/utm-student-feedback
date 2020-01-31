/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import StarRating from '../client/components/StarRating';

describe('StarRating Component', () => {
  const wrapper = shallow(<StarRating rating={3} />);

  it('should render 5 star components', () => {
    expect(wrapper.find('Star')).toHaveLength(5);
  });

  it('should only render lit stars equal to the rating', () => {
    expect(wrapper.find({ highlighted: true })).toHaveLength(3);
  });
});
