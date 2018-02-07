import React, { Component } from 'react';
import EmailBar from './EmailBar';
import Flickity from 'flickity';


class Landing extends Component {
  componentDidMount() {
    this.flkty = new Flickity('.landing', {
      cellAlign: 'left',
      contain: true,
      cellSelector: '.carousel-cell',
      autoPlay: 7000,
      pauseAutoPlayOnHover: false,
      wrapAround: true,
      pageDots: false,
      fiction: 0.25
    })
  }

  render() {
    return (
        <div className="landing">
          <div className="carousel-cell first"></div>
          <div className="carousel-cell second"></div>
          <div className="carousel-cell third"></div>
        
          <div className="glass">
            <h2>Learn from your neighbour</h2>
            <p>Whether it’s making Maria’s secret spaghetti sauce, practicing Hubert’s six easy steps to tie a tie, or packing colourful bento boxes with Hisami.</p>
          </div>
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
