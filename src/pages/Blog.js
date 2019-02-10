import React, { Component } from 'react'
import BlogPost from '../components/BlogPost'
import GenericHeader from '../components/GenericHeader'
import BlogList from '../containers/BlogList'
import { Route } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


export default class Blog extends Component {

  componentDidMount() {
      window.scrollTo(0, 0);
  }

  render() {

    return(
      <div className="container">
        <GenericHeader
          title="Coming soon! (in development)"
          bgImg=''/>
        <div className="row">
        <BlogList />
        </div>
        {/*<Route path="/blog/articles/:id" component={BlogPost}/>*/}
      </div>
    )
  }
}
