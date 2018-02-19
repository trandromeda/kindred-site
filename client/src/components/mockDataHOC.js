import React from 'react';

// This used to be a HOC, but refactored it to use render props instead. Note 'render' can be named anything
// The MockData component can be used to supply dummy data to any component through state.data

class MockData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.setState({data: mockData});
  }

  render() {
    return this.props.render(this.state)
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

export default MockData;