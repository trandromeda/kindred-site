import React, { Component } from 'react';

class LessonCard extends Component {
  render() {
    const image = require("../images/lessons/" + this.props.data.img);
    return (
        <div className="card-container">

          <div 
            className="photo"
            style={
              {
                backgroundImage: 'url('+image+')',
                backgroundSize: 'cover',
                overflow: 'hidden'
              }
            }
            >
          </div>

          <h3>{this.props.data.name}</h3>
          <p className="teacher-name">by {this.props.data.teacher}</p>
          <p className="blurb">{this.props.data.desc}</p>
          <div className="figures">
            <p>
            ${this.props.data.cost} | {this.props.data.duration} minutes | 21 
            </p>
          </div>

        </div>
      )
  }
}

export default LessonCard;