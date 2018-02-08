import React, { Component } from 'react';
import EmailBar from './EmailBar';

import Painting from '../images/painting.jpg';
import Lesson from '../images/max_lesson.jpg';
import Terrarium from '../images/terrarium.jpg';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      images: [
        {Painting},
        {Lesson},
        {Terrarium}
      ]
    }
  }

  componentWillMount() {
    this.preloadImages();
  }

  componentDidMount() {
    const self = this;
    setInterval(function() {
      self.handleSwitch();
    }, 3500)
  };

  componentWillUnmount() {
    clearInterval();
  }

  preloadImages = () => {
    for (let image of this.state.images) {
      const testImage = new Image(500, 500);
      testImage.src = Object.values(image)[0];
    }
  }

  handleSwitch = () => {
    this.setState((prevState, props) => {
      if (prevState.count < prevState.images.length - 1) {
        return {count: prevState.count + 1};
      } else {
        return {count: prevState.count = 0};
      }
    }
  )}

  render() {
    const image = this.state.images[this.state.count];
    const imageUrl = Object.values(image)[0]
    const divStyle = {
      backgroundImage: 'url('+imageUrl+')'
    }
    return (
        <div className="landing">
          <div 
          className="cell"
          style={divStyle}
          >
          </div>
        
          <div className="glass">
            <h2>Learn from your neighbour</h2>
            <p>Whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
          </div>
          <div className="landing-scrim">
            <h1>Learn from your neighbour</h1>
            <p>Whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
          </div>


        <EmailBar {...this.props} />
        </div>
      )
  }
}

export default Landing;
