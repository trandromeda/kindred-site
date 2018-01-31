import React, { Component } from 'react';

class LessonCard extends Component {
  render() {
    return (
        <div className="card-container">

          <div className="photo">
          
            <div className="caption">
              <p>Name of lesson <br />
              by Mentor Lastname</p>
            </div>
          </div>

          <div className="description">
            <p className="blurb">Pack cute and nutritious bento boxes for you and your loved ones</p>

            <div className="figures">
              <p>$15.00</p>
              <p>90 minutes</p>
              <p>21</p>
            </div>
          </div>

        </div>
      )
  }
}

export default LessonCard;
