import React, { Component } from 'react';
import logo from '../images/colour-logo.png';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar">
          <img src={logo} alt="Logo" />
        </div>
      )
  }
}

export default Navbar;
