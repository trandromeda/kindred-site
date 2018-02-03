import React, { Component } from 'react';


class HowItWorks extends Component {
  render() {
    return (
        <div className='how-it-works'>
          <h1 className='title'>How It Works</h1>
          <div className='step'>
            <h2>Setup</h2>
            <p>Create your profile in a few easy steps</p>
          </div>
          <div className='step'>
            <h2>Browse lessons</h2>
            <p>Can't find what you're looking for? Make a request in the marketplace</p>
          </div>
          <div className='step'>
          <h2>Meet in person!</h2>
          <p>Have a great learning experience</p>
          </div>                    
        </div>
      )
  }
}

export default HowItWorks;
