import React, { Component } from 'react'
import CustomerReview from './CustomerReview'
import GamesToGoSS from '../images/gamestogo_ss.png'

export default class CustomerReviewGroup extends Component {
  styles = {
    header: {
      fontSize: 30,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      textTransform: "uppercase",
      color: "#F28019"
    }
  }
  render() {
    return(
      <div className="container mt-5">
        <h2 style={this.styles.header}>Check what our customers say about us</h2>
        <CustomerReview
          customer="Alex"
          company="Games To Go"
          reviewText="Ryan and his team did a fantastic job! Very professional, accommodating and hardworking. Our new website was designed and built from the ground up. It was created to replace our existing site and has dramatically increased our online performance. We couldn't have found better quality or value anywhere else."
          imgSrc={GamesToGoSS}
          imgAlt="Games To Go website screenshot"/>
      </div>
    )
  }
}
