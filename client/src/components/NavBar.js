import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Media from 'react-media';

class NavBar extends Component {
  render() {
    return (
        <div className="navbar" id="navbar">
          <div className="nav-element">
            <Link to="/">
                <h1 className="logo">Kindr<span className="ed">ed</span></h1>
            </Link>
          </div>

          <Media query="(min-width: 900px)">
          {matches =>
            matches ? (
              <div className="links">
                <div className="nav-element link">
                  <Link to="/about" className="about">About</Link>
                </div>
                <div className="nav-element link">
                  <Link to="/mentor" className="mentor">Mentor</Link>
                </div>
                <div className="nav-element link">
                  <Link to="/coming-soon" className="browse">Contact</Link>
                </div>
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
