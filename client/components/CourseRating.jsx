import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StarRating from './StarRating';

const Heading = styled.div`
  font-size: 72px;
  font-weight: 500;
`;

const Subtitle = styled.div`
  font-size: 15px;
`;

const CourseRating = ({ rating }) => [
  <Heading key={1}>{rating}</Heading>,
  <StarRating key={2} rating={Math.round(rating)} />,
  <Subtitle key={3}>Course Rating</Subtitle>,
];

CourseRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default CourseRating;
