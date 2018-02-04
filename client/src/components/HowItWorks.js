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
            <p>Create your profile in a few easy steps</p>
          </div>
          <div className='step'>
            <h2>Browse lessons</h2>
            <img src={SearchSVG} />
            <p>Can't find what you're looking for? Make a request in the marketplace</p>
          </div>
          <div className='step'>
            <h2>Meet in person!</h2>
            <img src={MeetUpSVG} />
            <p>Have a great learning experience</p>
          </div>                    
        </div>
      )
  }
}

export default HowItWorks;
