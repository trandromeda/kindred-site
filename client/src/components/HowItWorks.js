import React, { Component } from 'react';
import SignupSVG from '../images/monitor.svg';
import SearchSVG from '../images/search.svg';
import MeetUpSVG from '../images/talking.svg';

class HowItWorks extends Component {
  render() {
    return (
        <div className='how-it-works'>
          <h1 className='title'>How It Works</h1>
          <div className='step'>
            <h2>Setup</h2>
            <img src={SignupSVG} />
            <p>Quickly build your profile with our guided walkthrough</p>
          </div>
          <div className='step'>
            <h2>Browse lessons</h2>
            <img src={SearchSVG} />
            <p>Can't find what you're looking for? Kindred will create a Lesson Request, bringing in potential teachers</p>
          </div>
          <div className='step'>
            <h2>Learn</h2>
            <img src={MeetUpSVG} />
            <p>After getting approved, meet new people for an interactive learning experience</p>
          </div>
          <div>
            <p>We are building out the Kindred prototype to better show you how the learning marketplace works. Sign up for our mailing list to be notified it comes out!</p>
          </div>                 
        </div>
      )
  }
}

export default HowItWorks;
