import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import LessonCard from './components/LessonCard';
import EmailBar from './components/EmailBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <div className="user-preference">
        <h1>Preview</h1>
        <div className="lesson-container">
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />
          <LessonCard />          
        </div>

        <EmailBar />

        </div>
      </div>
    );
  }
}

export default App;
