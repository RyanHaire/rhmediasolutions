import React, { Component } from 'react'

export default class CustomerReview extends Component {
  styles = {
    header: {
      fontSize: 23,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "500"
    },
    content: {
      fontSize: 20,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300"
    },
    img: {
      height: 185,
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    }
  }
  render() {
    return(
      <div className="container mt-3">
        <h4 style={this.styles.header}>{this.props.customer} from {this.props.company}</h4>
        <p style={this.styles.content}>&#8220;{this.props.reviewText}&#8221;</p>
        <p>
          <a href="https://gamestogo.ca/">
            <img style={this.styles.img} src={this.props.imgSrc} alt={this.props.imgAlt}/>
          </a>
        </p>
      </div>
    )
  }
}
