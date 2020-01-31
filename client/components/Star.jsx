import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ highlighted }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 48">
    <path fill={highlighted ? '#f4c150' : '#dedfe0'} d="m25,1 6,17h18l-14,11 5,17-15-10-15,10 5-17-14-11h18z" />
  </svg>
);

Star.propTypes = {
  highlighted: PropTypes.bool,
};

Star.defaultProps = {
  highlighted: false,
};

export default Star;
