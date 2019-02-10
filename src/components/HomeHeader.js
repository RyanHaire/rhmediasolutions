import React, { Component } from 'react'
import Logo from '../images/rhmedia-logo-orange.png'
import ScrollIndicator from './ScrollIndicator'
import { Transition } from 'react-transition-group'
import '../styles/animation.css'

export default class HomeHeader extends Component {
  styles = {
    header: {
      width: '100%',
      height: '100vh',
      backgroundImage: '',
      zIndex: -4,
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    },
    headerText: {
      color: "darkgrey",
      fontSize: "2rem",
      width: "100%",
      position: "absolute",
      top: "40%",
      left: "50%",
      transform: "translate(-50%,-40%)"
    },
    subText: {
      color: "darkgrey",
      fontSize: "1rem",
      width: "100%",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translateX(-50%)"
    },
    logo: {
      position: "absolute",
      top: "20%",
      left: "50%",
      height: 100,
      width: "auto",
      transform: "translateX(-50%)",
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
      <div style={this.styles.header}>
          <Transition in={true} timeout={250} appear>
            {(state) =>(
                <img src={Logo} alt="rh media solutions logo" style={this.styles.logo} className={`fade-${state}`}/>
            )}
          </Transition>
          <Transition in={true} timeout={300} appear>
            {(state) =>(
              <h1 style={this.styles.headerText} className={`fade-${state}`}>Welcome to RH Media Solutions</h1>
            )}
          </Transition>
          <Transition in={true} timeout={300} appear>
            {(state) =>(
              <h2 style={this.styles.subText} className={`fade-${state}`}>Development | Design | Media</h2>
            )}
          </Transition>
          <ScrollIndicator/>
      </div>
    )
  }
}
