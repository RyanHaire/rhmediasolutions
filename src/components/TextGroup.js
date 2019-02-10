import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class TextGroup extends Component {
  styles = {
    title: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      color: "#F28019",
      fontSize: 22,
      textTransform: "uppercase"
    },
    text: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
      color: "#F28019",
      fontSize: 18
    }
  }

  render() {
    return(
      <div className="container mt-5">
        <div className="mx-auto">
          {this.props.title && <h1 style={this.styles.title}>{this.props.title}</h1>}
          <ul className="list-group">
            {this.props.services.map((s, id) => {
              return <li key={`item${id}`} className="list-group-item">{s}</li>
            })}
          </ul>
          <Link to='/contact'>Contact us for more information.</Link>
        </div>
      </div>
    )
  }
}
