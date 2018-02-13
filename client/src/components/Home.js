import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LessonCard from 'components/LessonCard';
import EmailBar from 'components/EmailBar';
import HowItWorks from 'components/HowItWorks';
import MockData from './mockDataHOC';

class Home extends Component {
  render() {
    return (
        <div className="home-container">
          {/* FIRST SECTION */}
          <div className="intro-container">
            <div className="intro-description">
              <h2 className="title">Returning authenticity to the way people connect</h2>
              <p className="verbose">
              Joining Kindred means you can learn from someone who’s passionate about their craft.<br />
              Every interaction is face-to-face, different, and tailored to you.
              </p>
              <p className="sneak-peek-description">Here’s a sneak peek at what you can find once we launch:</p>
            </div>
          </div>

          {/* SECOND SECTION */}
          <LessonsWithMockData />   

          {/* SECTION DIVIDER */}
          <div className="section-divider">
            <h2 className="title">Every connection through Kindred is a unique learning experience</h2>
          </div>

          {/* THIRD SECTION */}
          <HowItWorks />

          {/* SECTION DIVIDER */}
          <div className="section-divider">
            <h2 className="title">Open beta beginning summer 2018</h2>
          </div>         

          <div className="cta">
            <p className="verbose">We’re working behind the scenes to create the best possible community for you. Sign up for our newsletter to get an invite to our open beta, or <Link to="/contact">write to us</Link> with your questions and ideas!</p>
          </div>   

          <EmailBar {...this.props} />
        </div>
      )
  }
}


class LessonsWithMockData extends React.Component {
  render() {
    return (
      <div className="lesson-container">
        <MockData render={mock => (
          mock.data.map((lesson, i) => 
          <LessonCard key={i} data={lesson} />
          )     
        )}
        />
      </div>
    )
  }
}

// const HomeWithMockData = withMockData(
//   Home,
//   mockData
// );

export default Home;