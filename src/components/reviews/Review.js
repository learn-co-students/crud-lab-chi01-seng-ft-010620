import React, { Component } from 'react';

class Review extends Component {

  handleOnClick = (id) => {
    this.props.deleteReview(id)
  }

  render() {
    const { review } = this.props
    console.log(this.props)
    return (
      <div>
        <li>
          {review.text}
        </li>
        <button onClick={() => {this.handleOnClick(review.id)}}> X </button>
      </div>
    );
  }

};

export default Review;
