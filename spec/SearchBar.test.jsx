/* eslint-env jest */
import React from 'react';
import { mount } from 'enzyme';

import SearchBar from '../client/components/SearchBar';

describe('SearchBar Component', () => {
  it('should call a search handler', () => {
    const mockSearchHandler = jest.fn();
    const wrapper = mount(<SearchBar onSearch={mockSearchHandler} />);

    wrapper.find('button').simulate('click');

    expect(mockSearchHandler).toBeCalled();
  });

  it('should should pass the search handler correct input', () => {
    const mockSearch = jest.fn();
    const wrapper = mount(<SearchBar onSearch={mockSearch} />);

    wrapper
      .find('input')
      .simulate('change', { target: { value: 'search string' } });

    wrapper
      .find('button')
      .simulate('click');

    expect(mockSearch.mock.calls[0][0]).toBe('search string');
  });
});
