import React from 'react';

const LessonCard = (props) => {
    const {img, name, teacher, desc, cost, duration} = props.data;
    const image = require("../images/lessons/" + img);
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

          <h3>{name}</h3>
          <p className="teacher-name smaller">with {teacher}</p>
          <p className="blurb smaller">{desc}</p>
          <div className="figures">
            <p className="smallest">
            ${cost} | {duration} minutes | 21 
            </p>
          </div>

        </div>
      )
}

export default LessonCard;