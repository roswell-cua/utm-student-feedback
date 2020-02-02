import React from 'react';
import styled from 'styled-components';

import RatingSelector from './RatingSelector';
import Review from './Review';
import SearchBar from './SearchBar';
import CourseRating from './CourseRating';

const StyleProvier = styled.div`
  font-family: open sans, helvetica neue, Helvetica, Arial, sans-serif;
  font-weight: 300;
  color: #29303b;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  grid-template-rows: max-content max-content 1fr;
  grid-template-areas:
    "cr rs rs"
    "st st sb"
    "rc rc rc";
  grid-gap: 10px;
`;

const CourseRatingContainer = styled.div`
  grid-area: cr;
  padding: 10px;
`;

const RatingSelectorContainer = styled.div`
  grid-area: rs;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const SearchTitleContainer = styled.div`
  font-size: 18px;
  font-weight: 600;
  grid-area: st;
`;

const SearchBarContainer = styled.div`
  grid-area: sb;
`;

const ReviewsContainer = styled.div`
 grid-area: rc;
`;

const Heading = styled.div`
  font-weight: 400;
  font-size: 22px;
`;

const NOW = new Date().toString();

const review = {
  content: `I've tried many angular courses on Udemy so far. This is no doubt the best of them, and almost the best at all. It covers every tiny detail of the framework. Great explanation.....! hats up to the trainer nicely composed. From my side few suggestions, mentioning here 1. create a angular library and use it in another angular app 2. artifact our created library to npm store and add dependency to our another angular app. so that it can be install when we ran 'npm install'
  was this helpful?`,
  rating: 4,
  created: NOW,
  modified: NOW,
  user: 'Sam Deuter',
  avatar: 'https://i.udemycdn.com/user/50x50/60471148_2f11.jpg',
};

class Feedback extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      rating: 3.7,
      percentages: [10, 20, 30, 40, 50],
    };
  }

  render() {
    const { rating, percentages } = this.state;

    const ratingSelectors = percentages.map(
      (per, i) => (<RatingSelector percent={per} rating={5 - i} />),
    );

    return (
      <StyleProvier>
        <Heading>Student feedback</Heading>
        <Container>
          <CourseRatingContainer><CourseRating rating={rating} /></CourseRatingContainer>
          <RatingSelectorContainer>{ratingSelectors}</RatingSelectorContainer>
          <SearchTitleContainer>Reviews</SearchTitleContainer>
          <SearchBarContainer><SearchBar /></SearchBarContainer>
          <ReviewsContainer><Review review={review} /></ReviewsContainer>
        </Container>
      </StyleProvier>
    );
  }
}
export default Feedback;
