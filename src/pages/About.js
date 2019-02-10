import React, { Component } from 'react'


export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  styles = {
    header: {
      fontSize: 22,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900"
    },
    paragraph: {
      fontSize: 20,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "500",
      textAlign: "left"
    }
  }

  render() {
    return(
      <div className="container mt-5 pt-5">
        <h1 style={this.styles.header}>What technology was used to make our site?</h1>
        <p className="mt-3" style={this.styles.paragraph}>It was made with ReactJS. ReactJS gives us the opportunity to create a single page application and have a competing edge of web page speed. We used bootstrap and a mix of a npm package called react-strap to make the ui and to create responsive pages so we can reach mobile, tablet, desktop and laptop users.</p>
      </div>
    )
  }
}
