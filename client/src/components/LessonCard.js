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
                backgroundPosition: '50% 50%',
                overflow: 'hidden'
              }
            }
            >
          </div>

          <h3>{this.props.data.name}</h3>
          <p className="teacher-name smaller">with {this.props.data.teacher}</p>
          <p className="blurb smaller">{this.props.data.desc}</p>
          <div className="figures">
            <p className="smallest">
            ${this.props.data.cost} | {this.props.data.duration} minutes | 21 
            </p>
          </div>

        </div>
      )
  }
}

export default LessonCard;