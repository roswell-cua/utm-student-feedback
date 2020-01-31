import React from 'react';
import styled from 'styled-components';

import PercentageBar from './PercentageBar';
import StarRating from './StarRating';
import RatingSelector from './RatingSelector';

const Container = styled.div`
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #29303b;
`;

const Heading = styled.div`
  font-weight: 400;
  font-size: 22px;
`;

const Feedback = () => (
  <Container>
    <Heading>Student feedback</Heading>
    <PercentageBar percent={50} />
    <StarRating rating={3} />
    <RatingSelector percent={68} rating={3} />
  </Container>
);

export default Feedback;
