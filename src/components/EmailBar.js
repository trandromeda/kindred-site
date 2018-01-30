import React, { Component } from 'react';

class EmailBar extends Component {
  componentDidMount() {
    document.getElementById("email").focus();
  }

  render() {
    return (
        <div className="email-bar" id="email-bar">
          <div className="left"></div>

          <div className="mid-section">
            <div className="middle-top"></div>
            <div className="input-box">
              <form>
                <input 
                  id="email"
                  type="text" 
                  name="email" 
                  placeholder=" Your email"
                />
                <input 
                  type="submit" 
                  value="Sign Up" 
                  className="signup-button" 
                />
              </form>
            </div>
            <div className="middle-bottom"></div>
          </div>

          <div className="right"></div>

        </div>
      )
  }
}

export default EmailBar;
