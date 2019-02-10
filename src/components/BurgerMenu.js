import React, { Component } from 'react'
import Burger from 'react-css-burger';

export default class BurgerMenu extends Component {
  state = {
    active: false
  };

  style = {
    outline: "none",
    margin: 0
  }

  toggleButton = () => {
    this.props.toggle()
    this.setState({ active: !this.state.active })
  }

  render() {
    return(
      <Burger
        onClick={this.toggleButton}
        active={this.props.active}
        burger="collapse"
        color="orange"
        hoverOpacity={0.85}
        style={this.style}/>
    )
  }
}
