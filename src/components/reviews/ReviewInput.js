import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {


  state = {
    text: ''
  }

  handleSubmit = (event) => {
    console.log(this.props)
    event.preventDefault()
    this.props.addReview({text: this.state.text, restaurantId: this.props.restaurantId})
    this.setState({
      text: ''
    })
  } 

  handleInput = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit ={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleInput(event)} type="text" name="text" value={this.state.text}/>
          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;
