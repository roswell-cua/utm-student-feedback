import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Close from '@material-ui/icons/Close';

import StarRating from './StarRating';
import PercentageBar from './PercentageBar';

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #007791;
  cursor: pointer;
`;

const Percentage = styled.span`
`;

const RatingSelector = ({ percent, rating, onClick }) => (
  <Container onClick={onClick}>
    <PercentageBar percent={percent} width={100} />
    <StarRating rating={rating} />
    <Percentage>{`${percent}%`}</Percentage>
    <Close />
  </Container>
);

RatingSelector.propTypes = {
  percent: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func,
};

RatingSelector.defaultProps = {
  onClick: () => {},
};

export default RatingSelector;
