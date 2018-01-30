import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div className="footer">
          <h1>Kindred</h1>

          <div className="column-1">
            <a href="/">About</a>
            <a href="/">Teach on Kindred</a>
            <a href="/">Who we are</a>
          </div>

          <div className="column-2">
            <a href="/">Blog</a>
            <a href="/">Contact us</a>
          </div>

          <div className="divider"></div>       

          <p className="copyright">Copyright © 2018, Kindred Experiences Inc. All Rights Reserved</p>
        </div>
      )
  }
}

export default Footer;
