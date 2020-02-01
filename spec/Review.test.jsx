/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';
import Review from '../client/components/Review';

describe('Review Component', () => {
  const NOW = new Date();
  const review = {
    content: 'This is a review',
    rating: 4,
    created: NOW.toString(),
    modified: NOW.toString(),
    user: 'Sam Deuter',
    avatar: 'localhost:3000/smiley.png',
  };

  const wrapper = mount(<Review review={review} />);

  it('should render the expected subcomponents', () => {
    expect(wrapper.exists('Avatar')).toBe(true);
    expect(wrapper.exists('StarRating')).toBe(true);
  });

  it('should display the username', () => {
    expect(wrapper.contains('Sam Deuter')).toBe(true);
  });

  it('should display the review content', () => {
    expect(wrapper.contains('This is a review')).toBe(true);
  });

  it('should display the creation date', () => {
    expect(wrapper.contains(NOW.toString())).toBe(true);
  });

  const LATER = new Date(NOW.valueOf() + 500);
  const reviewWithResponse = {
    ...review,
    response: {
      content: 'This is a response',
      created: LATER.toString(),
      modified: LATER.toString(),
      user: 'QWERTYASDFGH',
      avatar: 'localhost:3000/smiley.png',
    },
  };
  const responseWrapper = mount(<Review review={reviewWithResponse} />);

  it('should display a response from the author', () => {
    expect(responseWrapper.contains('This is a response')).toBe(true);
  });

  // this test is failing, when it should be passing
  // I don't know specifically why this one passing
  it('should display the author\'s username', () => {
    expect(responseWrapper.contains('QWERTYASDFGH')).toBe(true);
  });

  it('should display the time of the response', () => {
    expect(responseWrapper.contains(LATER.toString())).toBe(true);
  });
});
