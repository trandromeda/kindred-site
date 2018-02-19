import React, { Component } from 'react';
import { detect } from 'detect-browser';
import EmailBar from './EmailBar';

import Painting from '../images/backgrounds/painting.jpg';
import Lesson from '../images/backgrounds/noodles.jpg';
import Terrarium from '../images/backgrounds/terrarium.jpg';

const browser = detect();

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  componentDidMount() {
    if (browser && (
      browser.name === 'chrome' || 
      browser.name === 'crios' || 
      browser.name === 'android')) {
      const bgImageArrayUrls = [Terrarium, Lesson, Painting], msecs = 6500;

      for (let imgUrl of bgImageArrayUrls) {
        new Image().src = imgUrl; 
      }
      // caches images, avoiding white flash between background replacements
      // tried using this to fix bug in Safari, doesn't work...      

      const self = this;
      setInterval(function() {
        self.transitionBackground(bgImageArrayUrls);
      }, msecs)
    }
  };

  componentWillUnmount() {
    clearInterval();
  }

  transitionBackground = (urls) => {
    this.setState((prevState, props) => {
      if (prevState.count < urls.length - 1) {
        return {count: prevState.count + 1};
      } else {
        return {count: prevState.count = 0};
      }
    });

    document.documentElement.style.backgroundImage = "url(" + urls[this.state.count] + ")";
  }

  render() {
    return (
      <div className="feature">
        <div className="cell">
        </div>
      
        <div className="glass">
          <h2>Learn from your neighbour</h2>
          <p>... whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
        </div>
        <div className="feature-scrim">
          <h1>Learn from your neighbour</h1>
          <p>... whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
        </div>


      <EmailBar {...this.props} />
      </div>
    )
  }
}

export default Feature;