import React, { Component } from 'react'
import TeamMemberCard from './TeamMemberCard'
import RyanHaire from '../images/ryanhaire-profile-pic.JPG'
import CarterPang from '../images/carterpang-profile-pic.jpg'

export default class TeamGroup extends Component {
  styles = {
    heading: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 30,
      color: "#F28019"
    }
  }

  render() {
    return(
      <div className="container mt-5 col-lg-12 justify-content-space-around align-items-center">
        <h2 style={this.styles.heading}>Meet our team</h2>
        <div className="d-lg-flex">
          <TeamMemberCard
            imgSrc={RyanHaire}
            imgAlt="Ryan Haire picture"
            memberName="Ryan Haire"
            memberTitle='Founder | Developer | Designer'
            desc="Ryan is a student in the Software Development and Network Engineering program at Sheridan College. He is skilled in backend & frontend development, SEO, facebook/twitter/google ads, and graphic design. "
            />
            <TeamMemberCard
              imgSrc={CarterPang}
              imgAlt="Carter Pang picture"
              memberName="Carter Pang"
              memberTitle='Graphic Designer'
              desc="Carter is a student in the Graphic Design program at York University joined with Sheridan College. He is a skilled graphic designer with a great ability in drawing."
              />
        </div>
      </div>
    )
  }
}
