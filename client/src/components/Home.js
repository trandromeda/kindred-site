import React, { Component } from 'react';

import LessonCard from './LessonCard';
import EmailBar from './EmailBar';
import HowItWorks from './HowItWorks';
import withMockData from './mockDataHOC';

class Home extends Component {
  render() {
    const lessons = this.props.data.map((lesson, i) => 
      <LessonCard key={i} data={lesson} />
      )
    return (
        <div className="home">
          <div className="preview-container">
            <div className="lesson-container">
              {lessons}        
            </div>
            <div className="preview-description">
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ligula ligula. Nullam pharetra sapien eget magna semper accumsan. Pellentesque lobortis tincidunt gravida. Integer iaculis velit in augue pellentesque, vitae cursus nunc laoreet.
              </p>
            </div>
          </div>
          <EmailBar fill={true} />

          <HowItWorks />
        </div>
      )
  }
}

const mockData = [
  {
    name: 'Sushi Rolling',
    teacher: 'Hisami K',
    cost: 15,
    duration: 90,
    desc: 'Roll three different types of sushi and cook the perfect sushi rice',
    img: 'sushi.jpg'
  },
  {
    name: 'Italian Cuisine Primer',
    teacher: 'Giorgio I',
    cost: 20,
    duration: 90,
    desc: 'Make almost any Italian dish from scratch with just these fundamentals',
    img: 'italian.jpg'
  },
  {
    name: 'DIY Birthday Cards',
    teacher: 'Andrea N',
    cost: 15,
    duration: 90,
    desc: 'Hand-made cards will show your loved ones how much you care',
    img: 'card.jpg'
  },
  {
    name: 'Meal Prep like a Pro',
    teacher: 'Pan D',
    cost: 15,
    duration: 90,
    desc: "You'd be hard-pressed to eat out again after you start meal prepping",
    img: 'meal_prep.jpg'
  },
  {
    name: 'Budgeting 101',
    teacher: 'Claudia R',
    cost: 10,
    duration: 90,
    desc: 'Budgeting wisely today will get you closer to your goals in the future',
    img: 'money.jpg'
  },
  {
    name: 'As-tu parler le francais?',
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
