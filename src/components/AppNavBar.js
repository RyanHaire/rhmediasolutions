import React from 'react';
import { Collapse, Navbar, Nav, NavItem} from 'reactstrap';
import { Link } from 'react-router-dom'
import BurgerMenu from './BurgerMenu'
import Logo from '../images/rhmedia-logo-orange.png'

export default class AppNavBar extends React.Component {
  state = {
    collapsed: true,
    width: window.innerWidth
  };

  styles = {
    nav_link: {
      color: "lightgrey",
      textDecoration: "none",
      fontFamily: "Avenir, sans-serif",
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
    }
  }

  toggleNavbar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
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

  topOfScreen() {
    window.scrollTo(0, 0)
  }

  render() {

    const { width } = this.state;
    const isMobile = width <= 750;
      if(isMobile) {
        return (
          <div>
            <Navbar color="faded" className="fixed-top navbar-light" navbar>
              <BurgerMenu active={!this.state.collapsed} toggle={this.toggleNavbar}/>
              <Collapse isOpen={!this.state.collapsed}>
                <Nav navbar className="d-flex">
                    <NavItem>
                      <Link onClick={this.toggleNavbar} className="badge badge-dark p-2 pl-5 pr-5 mt-5" to="/">Home</Link>
                    </NavItem>
                    <NavItem>
                      <Link onClick={this.toggleNavbar} className="badge badge-dark p-2 pl-5 pr-5 mt-5" to="/services">Services</Link>
                    </NavItem>
                    <NavItem>
                      <Link onClick={this.toggleNavbar} className="badge badge-dark p-2 pl-5 pr-5 mt-5" to="/shop">Shop</Link>
                    </NavItem>
                    <NavItem>
                      <Link onClick={this.toggleNavbar} className="badge badge-dark p-2 pl-5 pr-5 mt-5" to="/contact">Contact</Link>
                    </NavItem>
                    <NavItem>
                      <Link onClick={this.toggleNavbar} className="badge badge-dark p-2 pl-5 pr-5 mt-5" to="/about">About</Link>
                    </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
      } else {
        return(
          <div>
            <Navbar className="navbar fixed-top navbar-light bg-white">
                <Link to="/" onClick={this.topOfScreen()}>
                  <img src={Logo} style={this.styles.logo} alt="rh media solutions logo" className="pull-left"/>
                </Link>
                <Nav className="pull-right">
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/">Home</Link>
                    </NavItem>
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/services">Services</Link>
                    </NavItem>
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/shop">Shop</Link>
                    </NavItem>
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/contact">Contact</Link>
                    </NavItem>
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/blog">Blog</Link>
                    </NavItem>
                    <NavItem className="nav-item ml-3">
                      <Link className="nav-link badge badge-secondary p-2" to="/about">About</Link>
                    </NavItem>
                </Nav>
            </Navbar>
          </div>
        )
      }

  }
}
