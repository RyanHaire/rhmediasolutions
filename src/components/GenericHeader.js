import React, { Component } from 'react'
import ScrollIndicator from './ScrollIndicator'
import { Transition } from 'react-transition-group'
import '../styles/animation.css'

export default class GenericHeader extends Component {
  styles = {
    header: {
      width: '100%',
      height: '100vh',
      zIndex: -4,
    },
    bgImg: {
      height: 370,
      marginTop: 95,
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    },
    title: {
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translateX(-50%)",
      fontSize: 20
    }
  }

  render() {
    if (!this.props.title) {
      return(
        <div style={this.styles.header}>
            <Transition in={true} timeout={300} appear>
              {(state) => (
                <img style={this.styles.bgImg} className={`fade-${state}`} src={this.props.bgImg} alt={this.props.imgAlt}/>
              )}
            </Transition>
            <ScrollIndicator/>
        </div>
      )
    }

    return(
      <div style={this.styles.header}>
        <Transition in={true} timeout={300} appear>
          {(state) => (
          <h1 className={`fade-${state}`} style={this.styles.title}>{this.props.title}</h1>
          )}
        </Transition>
          <Transition in={true} timeout={300} appear>
            {(state) => (
              <img style={this.styles.bgImg} className={`fade-${state}`} src={this.props.bgImg} alt={this.props.imgAlt}/>
            )}
          </Transition>
          <ScrollIndicator/>
      </div>
    )
  }
}
