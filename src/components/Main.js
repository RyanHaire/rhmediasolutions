import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Services from '../pages/Services'
import Shop from '../pages/Shop'
import Contact from '../pages/Contact'
import Blog from '../pages/Blog'
import About from '../pages/About'
import BlogPost from './BlogPost'

export default class Main extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/shop" component={Shop} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
      </Switch>
    )
  }
}
