import React from 'react';

import SignupSVG from '../images/monitor.svg';
import SearchSVG from '../images/search-inverse.svg';
import MeetUpSVG from '../images/talking.svg';

const HowItWorks = () => {
  return (
      <div className='how-it-works'>
        <h1 className='title'>How It Works</h1>
        <div className='step'>
          <div className="icon">
            <h2>Setup</h2>
            <img src={SignupSVG} alt='Monitor' />
          </div>
          <div className="step-description">
            <p>Quickly create your profile with our guided walkthrough</p>
            <ul>
              <li>You’ll be able to connect using Facebook or Google for easy one-click signup</li>
              <li>Everyone joining Kindred will be verified, so you can feel comfortable meeting new people</li>
            </ul>
          </div>
        </div>
        <div className='step connect'>
          <div className="icon">
            <h2>Connect</h2>
            <img src={SearchSVG} alt='Search Bar' />
          </div>
          <div className="step-description">
            <p>Search or browse lessons online, then sign up for a class you like. If you’ve used Airbnb, it’s a similar process</p>
            <ul>
              <li>Don’t find what you’re looking for? Kindred automatically creates an 'Ask’ based on your search query</li>
              <li>Mentors can view all Asks and see where demand is greatest</li>
            </ul>
          </div>
        </div>
        <div className='step'>
          <div className="icon">
            <h2>Learn</h2>
            <img src={MeetUpSVG} alt='People meeting in person' />
          </div>
          <div className="step-description">
            <p>After a mentor confirms your request, meet in person at the scheduled place and time</p>
            <ul>
              <li>You’ll be joined by fellow learners in a cozy group setting</li>
              <li>Lessons may take place at the mentor’s home. We’re looking for community partners to provide venues!</li>
            </ul>
          </div>
        </div>              
      </div>
    )
}

export default HowItWorks;
