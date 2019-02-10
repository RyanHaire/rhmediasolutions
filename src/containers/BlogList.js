import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, Button } from 'reactstrap';
import { Link, Route} from 'react-router-dom'
import BlogPost from '../components/BlogPost.js'
import { connect } from 'react-redux'

export default class BlogList extends Component {

  styles= {
    card: {
      width: "250px",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
    },
    date: {
      fontSize: 12,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
      color: "lightgrey",
    },
    cardImg: {
      height: "200px",
      width: "100%",
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

  componentDidMount() {

  }

  render() {
    return(
      <div style={{margin: '0 auto', fontSize: 25, color: '#404040'}}>Coming soon!</div>
    )
  }

}
