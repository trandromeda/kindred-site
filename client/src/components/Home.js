import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LessonCard from 'components/LessonCard';
import EmailBar from 'components/EmailBar';
import HowItWorks from 'components/HowItWorks';
import withMockData from './mockDataHOC';

class Home extends Component {
  render() {
    const lessons = this.props.data.map((lesson, i) => 
      <LessonCard key={i} data={lesson} />
      )
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
          <div className="lesson-container">
            {lessons}        
          </div>

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

const mockData = [
  {
    name: 'Sushi Rolling',
    category: 'Food',
    teacher: 'Hisami K',
    cost: 15,
    duration: 90,
    desc: 'Roll three different types of sushi and cook the perfect sushi rice',
    img: 'sushi.jpg'
  },
  {
    name: 'Budgeting 101',
    category: 'Finance',
    teacher: 'Claudia R',
    cost: 10,
    duration: 60,
    desc: 'Budgeting wisely today will get you closer to your goals in the future',
    img: 'money.jpg'
  },  
  {
    name: 'Italian Cuisine Primer',
    category: 'Food',
    teacher: 'Giorgio I',
    cost: 20,
    duration: 120,
    desc: 'Make almost any Italian dish from scratch with just these fundamentals',
    img: 'italian.jpg'
  },
  {
    name: 'DIY Birthday Cards',
    category: 'Arts & Crafts',
    teacher: 'Andrea N',
    cost: 15,
    duration: 60,
    desc: 'Hand-made cards will show your loved ones how much you care',
    img: 'card.jpg'
  },
  {
    name: 'Meal Prep like a Pro',
    category: 'Food',
    teacher: 'Pan D',
    cost: 15,
    duration: 90,
    desc: "You'd be hard-pressed to eat out again after you start meal prepping",
    img: 'pans_meal_prep.jpg'
  },
  {
    name: 'As-tu parler le francais?',
    category: 'Language',
    teacher: 'Hubert D',
    cost: 10,
    duration: 90,
    desc: 'A laid-back language class with a focus on reading and conversation',
    img: 'french.jpg'
  },  
]

const HomeWithMockData = withMockData(
  Home,
  mockData
);

export default HomeWithMockData;