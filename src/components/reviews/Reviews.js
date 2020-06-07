import React, { Component } from 'react';
import Review from './Review';
import Restaurant from '../restaurants/Restaurant';

const  Reviews = props =>  {

  const {reviews, restaurantId, deleteReview } = props;

  const associatedReviews = reviews.filter(
    review => review.restaurantId === restaurantId);

  const reviewList = associatedReviews.map(
(review, index) => {
    return <Review key={index} review={review} deleteReview={deleteReview} /> 
  })

  



  


 
    return (
      <ul>
        {reviewList}
      </ul>
    );
  
};

export default Reviews;