import React, { Component } from 'react'
import {connect} from 'react-redux'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput 
        addReview={this.props.addReview}  restaurantId={this.props.restaurant.id}/>

        <Reviews 
        restaurantId={this.props.restaurant.id} reviews = {this.props.reviews} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = ({ reviews }) => ({ reviews })

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({ type: 'ADD_REVIEW', review}),
  deleteReview: id => dispatch({ type: 'DELETE_REVIEW', id})
})


// addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
//   deleteRestaurant: id => dispatch({
//     type: 'DELETE_RESTAURANT', id
//   })

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
