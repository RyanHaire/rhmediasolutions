import React, { Component } from 'react'

export default class BlogPost extends Component {
  styles =  {
    title: {
      textTransform: "uppercase",
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      color: "#F28019",
      borderBottom : "1px solid #40404"
    },
    paragraph: {
      textAlign: "center",
      fontSize: 20,
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "300",
      marginTop: "1rem"
    },
    date: {
      fontSize: 13,
      color: "lightgrey",
      display: "block",
      fontWeight: "300"
    },
    post: {
      width: "60%",
      padding: "4rem",
      border: "1px solid lightgrey"
    }

  }

  state = {
    post: {},
    fetched: false
  }

  componentDidMount() {
    const url = 'http://wp.rhmediasolutions.com' // Wordpress installation url
    const postsEndPoint = `${url}/wp-json/wp/v2/posts/${this.props.match.params.id}` // Endpoint for getting Wordpress Posts

    const request = new Request(
      postsEndPoint,
      {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
      }
    );
    // make fetch to wordpress page for posts
    fetch(request)
    .then(response => {
      if(response.status === 200) {
        return response.json()
      } else {
        throw new Error('Something went wrong on api server!');
      }
    })
    .then(response => {
      this.setState({
          post: response,
          fetched: true
      })
      console.log(this.state)
    })
    .catch(err => {
      console.debug(err)
    })
  }

  render() {
    if (this.state.fetched) {
      return (
        <div className="container" style={this.styles.post}>
          <h2 style={this.styles.title}>
          {this.state.post.title.rendered}
          <span style={this.styles.date}>{this.state.post.acf.date}</span>
          </h2>
          <p style={this.styles.paragraph} dangerouslySetInnerHTML={{__html: this.state.post.content.rendered}}></p>
        </div>
      )
   } else {
     return ""
   }
  }

}
