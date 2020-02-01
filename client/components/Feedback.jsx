import React from 'react';
import styled from 'styled-components';

import PercentageBar from './PercentageBar';
import StarRating from './StarRating';
import RatingSelector from './RatingSelector';
import Avatar from './Avatar';
import Review from './Review';

const Container = styled.div`
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #29303b;
`;

const Heading = styled.div`
  font-weight: 400;
  font-size: 22px;
`;

const NOW = new Date().toString();

const review = {
  content: `I've tried many angular courses on Udemy so far. This is no doubt the best of them, and almost the best at all. It covers every tiny detail of the framework.Great explanation.....! hats up to the trainer nicely composed. From my side few suggestions, mentioning here 1. create a angular library and use it in another angular app 2. artifact our created library to npm store and add dependency to our another angular app. so that it can be install when we ran 'npm install'
  was this helpful?`,
  rating: 4,
  created: NOW,
  modified: NOW,
  user: 'Sam Deuter',
  avatar: 'https://i.udemycdn.com/user/50x50/60471148_2f11.jpg',
};

const reviewWithResponse = {
  ...review,
  response: {
    content: `This is a response, NOW THIS IS A RESPONSE LET'S TYPE SOME MORE WORDS
    YAYAYAYAYAYAYAYAYAY HAHAHA YO WADDUP G`,
    created: NOW,
    modified: NOW,
    user: 'asdf111',
    avatar: 'localhost:3000/smiley.png',
  },
};

const Feedback = () => (
  <Container>
    <Heading>Student feedback</Heading>
    <PercentageBar percent={50} />
    <StarRating rating={3} />
    <RatingSelector percent={68} rating={3} />
    <Avatar username="Sam Deuter" />
    <Avatar username="Sam Deuter" src="https://i.udemycdn.com/user/50x50/60471148_2f11.jpg" />
    <Review review={review} />
    <Review review={reviewWithResponse} />
  </Container>
);

export default Feedback;
