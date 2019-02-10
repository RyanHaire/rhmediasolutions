import React, { Component } from 'react'

export default class TeamMemberCard extends Component {
  styles = {
    descriptionStyle: {
        width: "auto",
        margin: "0 auto",
        padding: 5,
        fontSize: 16,
        fontFamily: '\'Source Sans Pro\', sans-serif',
        fontWeight: "300",
    },
    memberNameStyle: {
      textTransform: "uppercase",
      fontSize: 22.5,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900"
    },
    titleStyle: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontStyle: "italic",
      fontSize: 18
    },
    cardImg: {
      height: 100,
      width: 100,
      objectFit: "cover"
    }
  }

  render() {
    return(
        <div className="container mt-4">
          <div className="m-2">
            <img className="rounded-circle" src={this.props.imgSrc} alt={this.props.imgAlt} style={this.styles.cardImg}/>
          </div>
          <h3 style={this.styles.memberNameStyle}>{this.props.memberName}</h3>
          <h5 style={this.styles.titleStyle}>{this.props.memberTitle}</h5>
          <p className="text-left" style={this.styles.descriptionStyle}>{this.props.desc}</p>
        </div>
    )
  }
}
