import React, { Component } from 'react';
import EmailBar from './EmailBar';


class Landing extends Component {
  render() {
    return (
        <div className="landing">
        
          <div className="landing-scrim">
            <h1>Learn from your neighbour</h1>
            <p>Whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
          </div>

        <EmailBar />
        </div>
      )
  }
}

export default Landing;
