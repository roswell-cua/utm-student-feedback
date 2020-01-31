import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

const StarRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i += 1) {
    stars.push(<Star key={i} highlighted={i <= rating} />);
  }

  return <div>{stars}</div>;
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
