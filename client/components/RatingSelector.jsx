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
  opacity: ${(props) => ((props.focused || props.focused === null) ? 1 : 0.5)};
`;

const Percentage = styled.div`
  width: 40px;
`;

const SymbolContainer = styled.div`
  width: 40px;
  height: 25px;
`;

const RatingSelector = ({
  percent, rating, onClick, focused,
}) => (
  <Container onClick={onClick} focused={focused}>
    <PercentageBar percent={percent} />
    <StarRating rating={rating} />
    <Percentage>{`${percent}%`}</Percentage>
    <SymbolContainer>{(focused) ? <Close /> : null}</SymbolContainer>
  </Container>
);

RatingSelector.propTypes = {
  percent: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  onClick: PropTypes.func,
  focused: PropTypes.bool,
};

RatingSelector.defaultProps = {
  onClick: () => {},
  focused: null,
};

export default RatingSelector;
