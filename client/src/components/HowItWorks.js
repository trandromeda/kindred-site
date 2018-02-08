import React from 'react';
import SignupSVG from '../images/monitor.svg';
import SearchSVG from '../images/search.svg';
import MeetUpSVG from '../images/talking.svg';

const HowItWorks = () => {
  return (
      <div className='how-it-works'>
        <h1 className='title'>How It'll Work</h1>
        <div className='step'>
          <div className="icon">
            <h2>Setup</h2>
            <img src={SignupSVG} alt='Monitor' />
          </div>
          <div className="step-description">
            <p>Quickly build your profile with our guided walkthrough</p>
            <ul>
              <li>Tip 1</li>
              <li>Tip 2</li>
            </ul>
          </div>
        </div>
        <div className='step'>
          <div className="icon">
            <h2>Connect</h2>
            <img src={SearchSVG} alt='Search Bar' />
          </div>
          <div className="step-description">
            <p>Can't find what you're looking for? Kindred will create a Lesson Request, bringing in potential teachers</p>
            <ul>
              <li>Tip 1</li>
              <li>Tip 2</li>
            </ul>
          </div>
        </div>
        <div className='step'>
          <div className="icon">
            <h2>Learn</h2>
            <img src={MeetUpSVG} alt='People meeting in person' />
          </div>
          <div className="step-description">
            <p>After getting approved, meet new people for an interactive learning experience</p>
            <ul>
              <li>Tip 1</li>
              <li>Tip 2</li>
            </ul>
          </div>
        </div>
        <div className="cta">
          <p className="verbose">We are building out the Kindred prototype to better show you how the platform works. Sign up for our mailing list to be notified it comes out!</p>
        </div>                 
      </div>
    )
}

export default HowItWorks;
