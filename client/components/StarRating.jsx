import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Star from './Star';

const Container = styled.div`
  display: flex;
`;

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    stars.push(<Star key={i} highlighted={i <= rating} />);
  }

  return <Container>{stars}</Container>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
