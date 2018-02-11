import React, { Component } from 'react';

import LessonCard from 'components/LessonCard';
import EmailBar from 'components/EmailBar';
import HowItWorks from 'components/HowItWorks';
import withMockData from './mockDataHOC';

import GroupPhoto from 'images/pho_group_square.jpg';

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
              <p className="sneak-peek-description">Here’s a sneak peek at what you can find on the platform once we launch:</p>
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
    img: 'meal_prep.jpg'
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

{/*<img src={GroupPhoto} alt="Kindred group learning how to cook pho" />*/}
