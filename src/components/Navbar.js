import React, { Component } from 'react';
import logo from '../images/colour-logo.png';

class Navbar extends Component {
  render() {
    return (
        <div className="navbar" id="navbar">
          <img src={logo} alt="Logo" className="logo" />

          <a href="#" className="about">About</a>
          <a href="#" className="mentor">Mentor</a>
          <a href="#" className="browse">Browse Lessons</a>

        </div>
      )
  }
}

export default Navbar;
