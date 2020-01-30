/* eslint-env jest */
import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../client/components/SearchBar';

describe('SearchBar Component', () => {
  it('should call a search handler', () => {
    const mockSearch = jest.fn();
    const wrapper = shallow(<SearchBar onSearch={mockSearch} />);

    wrapper.find('[type="submit"]').simulate('click');

    expect(mockSearch).toHaveBeenCalled();
  });

  it('should should pass the search handler correct input', () => {
    const mockSearch = jest.fn();
    const wrapper = shallow(<SearchBar onSearch={mockSearch} />);

    wrapper.find('input').node.value = 'search string';
    wrapper.find('[type="submit"]').simulate('click');

    expect(mockSearch.mock.calls[0][0]).toBe('search string');
  });
});
