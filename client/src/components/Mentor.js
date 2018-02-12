import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import MeetingSVG from '../images/meeting.svg';
import CookingSVG from '../images/cooking.svg';
import MoneySVG from '../images/investment.svg';

import CustomHead from 'components/CustomHead';

class Mentor extends Component {
  render() {
    return (
      <div className="mentor-container">
        <CustomHead pageTitle="Be a mentor" />
        <h1 className="title">Become a Kindred Mentor</h1>

        <div className="section">
          <p className="verbose">Mentoring on Kindred can be a fun way to meet new people, pass on useful skills, and make some money on the side.</p>
          <img src={MeetingSVG} alt="" />
        </div>

        <div className="section section-two">
          <img src={CookingSVG} alt="" />
          <p className="verbose">The Kindred app will help you easily set up and plan lessons, while connecting you to eager learners who appreciate your time and expertise.</p>
        </div>

        <div className="section">
          <p className="verbose">The platform will also allow you to see the levels of demand for different types of lessons. You’ll be able to tailor your lessons towards the areas of greatest demand.</p>
          <img src={MoneySVG} alt="" />
        </div>

        <p className="verbose">
        If you want to be part of an exciting new movement and help shape the future of peer-to-peer learning, <Link to="/contact">send us a message</Link> - we’d love to work with you!</p>
      </div>
    )
  }
}

export default Mentor;
