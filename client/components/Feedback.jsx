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
  font-weight: 500;
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

    this.setQueryString = this.setQueryString.bind(this);
    this.setQueryRating = this.setQueryRating.bind(this);
    this.reviewPredicate = this.reviewPredicate.bind(this);

    this.state = {
      rating: 3.7,
      percentages: [40, 25, 15, 13, 7],
      reviews: [review, review, review, review, review],
      queryString: '',
      queryRating: null,
    };
  }

  setQueryString(str) {
    this.setState({ queryString: str });
  }

  setQueryRating(num) {
    const { queryRating } = this.state;
    this.setState({ queryRating: (queryRating === num) ? null : num });
  }

  reviewPredicate(rev) {
    const { queryString, queryRating } = this.state;
    const ratingMatch = (queryRating) ? queryRating === Math.round(rev.rating) : true;
    return ratingMatch && rev.content.includes(queryString);
  }

  render() {
    const {
      rating, percentages, queryString, queryRating, reviews,
    } = this.state;

    const searchTitle = `Reviews ${queryString.length > 0 ? `mentioning ${queryString}` : ''}`;

    const ratingSelectors = percentages.map(
      (per, i) => (
        <RatingSelector
          percent={per}
          rating={5 - i}
          onClick={() => { this.setQueryRating(5 - i); }}
          focused={(queryRating) ? 5 - i === queryRating : null}
        />
      ),
    );

    const filteredReviews = reviews
      .filter(this.reviewPredicate)
      .map((r) => <Review review={r} />);

    return (
      <StyleProvier>
        <Heading>Student feedback</Heading>
        <Container>
          <CourseRatingContainer><CourseRating rating={rating} /></CourseRatingContainer>
          <RatingSelectorContainer>{ratingSelectors}</RatingSelectorContainer>
          <SearchTitleContainer>{searchTitle}</SearchTitleContainer>
          <SearchBarContainer><SearchBar onSearch={this.setQueryString} /></SearchBarContainer>
          <ReviewsContainer>
            {(filteredReviews.length) ? filteredReviews : 'Sorry about that'}
          </ReviewsContainer>
        </Container>
      </StyleProvier>
    );
  }
}
export default Feedback;
