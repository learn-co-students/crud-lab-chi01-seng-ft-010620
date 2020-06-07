import React, { Component } from 'react';

class RestaurantInput extends Component {

  state = {
    text: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addRestaurant(this.state.text)

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
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <input onChange={(event) => this.handleInput(event)} type="text" name= "text"  value={this.state.text} />

          <input type="submit" value="SUBMIT"/>
        </form>
      </div>
    );
  }
};

export default RestaurantInput;
