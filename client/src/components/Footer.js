import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
        <div className="footer-container">
          <h1>Kindred</h1>

          <div className="column-1">
            <Link to="/about">About</Link>
            <Link to="/mentor">Teach on Kindred</Link>
            <Link to="/team">Who we are</Link>
          </div>

          <div className="column-2">
            <a href="https://medium.com/getkindred" target="_blank">Blog</a>
            <Link to="/contact">Contact us</Link>
          </div>

          <div className="divider"></div>       

          <p className="copyright smallest">Copyright © 2018, Kindred Experiences Inc. All Rights Reserved</p>
        </div>
      )
  }
}

export default Footer;
