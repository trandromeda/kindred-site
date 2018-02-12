import React, { Component } from 'react';
import Connect from '../images/tolerance.svg';
import Share from '../images/chat.svg';
import Cherish from '../images/photo.svg';

import CustomHead from 'components/CustomHead';

class About extends Component {
  render() {
    return (
        <div className="about-container">
            <CustomHead pageTitle="About" />
            <h1 className="title">About</h1>

            <p className="verbose">
            Kindred was founded on the belief that everyone has a story worth telling, no matter their age, gender, upbringing, or place of birth. We want to build a happier world where people from all walks of life can come together and openly share their knowledge, life lessons, and experiences - free of discrimination and bias.
            </p>

            <div className="trio-benefits">
              <div className="benefit">
                <img src={Connect} alt="Connect" />
                <h2>Connect</h2>
                <p>with people from different walks of life</p>
              </div>
              <div className="benefit">
                <img src={Share} alt="Connect" />
                <h2>Share</h2>
                <p>stories gained over a lifetime</p>
              </div>
              <div className="benefit">
                <img src={Cherish} alt="Connect" />
                <h2>Cherish</h2>
                <p>new friends, new skills and new memories</p>
              </div>

            </div>

            <h1>Mission</h1>
            <p className="verbose">
            Our goal is to enrich the lives of seniors and empower them to be role models for young people everywhere. We will achieve this by creating spaces for enjoyable and personalized learning experiences, highlighting the wealth of knowledge that seniors have to share. In doing so, we also hope to inspire society as a whole to do more good.
            </p>     

            <h1>Vision</h1>
            <p className="verbose"> 
            A world where every stage of life is celebrated and lived to its fullest, from beginning to end.
            </p>
        </div>
      )
  }
}

export default About;
