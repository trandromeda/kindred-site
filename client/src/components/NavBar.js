import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Media from 'react-media';

class NavBar extends Component {
  render() {
    return (
        <div className="navbar" id="navbar">
          <Link to="/"><h1 className="logo">Kindr<span className="ed">ed</span></h1></Link>
          <Media query="(min-width: 900px)">
          {matches =>
            matches ? (
              <div className="links">
                <Link to="/about" className="about">About</Link>
                <Link to="/mentor" className="mentor">Mentor</Link>
                <Link to="/coming-soon" className="browse">Browse Lessons</Link>
              </div>
            ) : (
              <div className='bars'>
              <i className="fas fa-bars"></i>
              </div>
            )
          }
          </Media>
          <div className="divider"></div>          
        </div>
    )
  }
}

export default NavBar;
