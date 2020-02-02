import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Search from '@material-ui/icons/Search';

const Container = styled.div`
  display: flex;
`;

const SearchInput = styled.input`
  display: block;
  padding: 5px;
`;

const SearchButton = styled.button`
  display: block;
  height: 100%;
  color: #fff;
  background-color: #007791;
  cursor: pointer;
  border-radius: 0px 3px 3px 0px;

  &:hover {
    background-color: #003440;
  }
`;

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { queryString: '' };
  }

  setQuery(queryString) {
    this.setState({ queryString });
  }

  render() {
    const { onSearch } = this.props;
    const { queryString } = this.state;
    return (
      <Container>
        <SearchInput placeholder="Search Reviews" onChange={(e) => { this.setQuery(e.target.value); }} />
        <SearchButton onClick={() => { onSearch(queryString); }}><Search fontSize="small" /></SearchButton>
      </Container>
    );
  }
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;
