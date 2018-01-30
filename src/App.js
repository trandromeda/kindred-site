import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import LessonCard from './components/LessonCard';
import EmailBar from './components/EmailBar';
import Footer from './components/Footer';

class App extends Component {

  componentDidMount() {
    console.log('mounted');
    const nav = document.getElementById("navbar");
    window.onscroll = function() {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.classList.add('white');
      } else {
        nav.classList.remove('white');
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <div className="preview">
          <h1>Preview</h1>
          <div className="lesson-container">
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />
            <LessonCard />          
          </div>

          <div className="preview-description">
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et ligula ligula. Nullam pharetra sapien eget magna semper accumsan. Pellentesque lobortis tincidunt gravida. Integer iaculis velit in augue pellentesque, vitae cursus nunc laoreet. Vivamus justo nulla, efficitur sed nulla id, tincidunt vehicula lectus. Nunc tempus rhoncus porttitor. Fusce vitae venenatis nunc. Sed ornare scelerisque neque ut euismod. Cras id scelerisque ipsum, eleifend euismod libero. Maecenas dignissim ut diam quis ornare. Duis vehicula vehicula imperdiet.
            </p>
          </div>
        </div>

        <EmailBar />

        <Footer />

      </div>
    );
  }
}

export default App;
