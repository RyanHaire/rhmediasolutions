import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/rhmedia-logo-orange.png'

export default class AppFooter extends Component {
  styles = {
    footer_col : {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 14
    },
    footer_col_title: {
      fontWeight: "400"
    },
    logo: {
      height: 70,
      WebkitTouchCallout: "none",
      WebkitUserSelect: "none",
      KhtmlUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      userDrag: "none",
      WebkitUserDrag: "none"
    },
    copyright: {
      fontFamily: '\'Source Sans Pro\', sans-serif',
      fontWeight: "900",
      fontSize: 14,
      textAlign: "center"
    }
  }

  state = {
    width: window.innerWidth
  }

  componentWillMount = () => {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  // make sure to remove the listener
  // when the component is not mounted anymore
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {
    const { width } = this.state;
    const isMobile = width <= 630;

    return(
      <footer className="container mt-5 mx-auto">
        <div className="d-md-flex align-items-center">
            <div className="col-sm-12 col-md-4 col-lg-3 mt-3 m-2 mx-auto align-self-start" style={this.styles.footer_col}>
              <h4 style={this.styles.footer_col_title}>Contact</h4>
              <p>
                <a href="mailto:ryanhaire@rhmediasolutions.com" className="text-secondary">ryanhaire@rhmediasolutions.com</a>
              </p>
              <p>
                <a href="tel:9053349035" className="text-secondary">905-334-9025</a>
              </p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 mt-3 m-2 mx-auto align-self-start" style={this.styles.footer_col}>
              <h4 style={this.styles.footer_col_title}>Social Media</h4>
              <p><a target="_blank" href="https://www.facebook.com/rhmediasolutions/" className="text-secondary" alt="facebook link for rh media solutions page">Facebook</a></p>
              <p><a target="_blank" href="" className="text-secondary" alt="twitter link for rh media solutions page">Twitter</a></p>
              <p><a target="_blank" href="" className="text-secondary" alt="instagram link for rh media solutions page">Instagram</a></p>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-3 mt-3 m-2 mx-auto align-self-start" style={this.styles.footer_col}>
              <h4 style={this.styles.footer_col_title}>Navigate</h4>
              <p><Link className="text-secondary" to='/'>Home</Link></p>
              <p><Link className="text-secondary" to='/services'>Services</Link></p>
              <p><Link className="text-secondary" to='/shop'>Shop</Link></p>
              <p><Link className="text-secondary" to='/contact'>Contact</Link></p>
              <p><Link className="text-secondary" to='/blog'>Blog</Link></p>
              <p><Link className="text-secondary" to='/about'>About</Link></p>
            </div>
          {!isMobile && <div>
            <Link to="/">
              <img src={Logo} style={this.styles.logo} alt="rh media solutions logo" className="align-self-center"/>
            </Link>
            </div>}
        </div>
        <div className="d-md-flex p-2 justify-content-center" styles={this.styles.copyright}>
          Copyright &copy; {new Date().getFullYear()} RH Media Solutions.
        </div>
      </footer>
    )
  }
}
