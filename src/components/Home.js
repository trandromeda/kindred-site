import React, { Component } from 'react';

import LessonCard from './LessonCard';
import EmailBar from './EmailBar';

class Home extends Component {
  render() {
    return (
        <div className="home" id="main">
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
        </div>
      )
  }
}

export default Home;