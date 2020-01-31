import React from 'react';
import styled from 'styled-components';

import PercentageBar from './PercentageBar';
import StarRating from './StarRating';

const Heading = styled.h1`
  color: blue;
`;

const App = () => (
  <Heading>
    Hello World!
    <PercentageBar percent={50} />
    <StarRating rating={3} />
  </Heading>
);

export default App;
