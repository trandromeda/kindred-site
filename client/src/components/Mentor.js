import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Mentor extends Component {
  render() {
    return (
        <div className="mentor-container">
          <h1 className="title">Become a Kindred Mentor</h1>

          <p className="verbose">Mentoring on Kindred can be a fun and laidback way for you to meet new people, pass on useful skills, and make some money on the side.</p>

          <p className="verbose">We're building tools that will help you set up and plan lessons in a painless and enjoyable way, so that you can spend more time teaching and less time on admin.</p>

          <p className="verbose">The platform will also allow you to see the levels of demand for different types of lessons. Areas of greatest need will yield the greatest opportunities!</p>

          <p className="verbose">Join our mailing list to learn when Kindred is open to the public. Wanna be an early adopter? <Link to="/coming-soon" className="browse">Contact us</Link>, we'd love to work with you to build the best learning experiences possible.</p>
        </div>
      )
  }
}

export default Mentor;
