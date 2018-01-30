import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
        <div className="navbar" id="navbar">
          <Link to="/"><h1 className="logo">Kindr<span className="yellow">ed</span></h1></Link>
          <Link to="/about" className="about">About</Link>
          <Link to="/coming-soon" className="mentor">Mentor</Link>
          <Link to="/coming-soon" className="browse">Browse Lessons</Link>
        </div>
    )
  }
}

export default NavBar;
