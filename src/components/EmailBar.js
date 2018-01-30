import React, { Component } from 'react';

class EmailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    document.getElementById("email").focus();
  }

  handleChange = (event) => {
    this.setState({value: event.target.value});
  }

  handleSubscribe = (event) => {
    console.log('handle subscribe event');
    console.log(this.state.value);

    const data = {
      email: this.state.value
    }

    event.preventDefault();
    return fetch('/api/subscribe', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(this.checkStatus)
    .then(console.log('yas'))
    .catch((err) => {
      console.log("error", err);
    });
  }

  checkStatus = (response) => {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  render() {
    return (
        <div className="email-bar" id="email-bar">
          <div className="left"></div>

          <div className="mid-section">
            <div className="middle-top"></div>
            <div className="input-box">
              <form onSubmit={this.handleSubscribe}>
                <input 
                  id="email"
                  type="text" 
                  name="email"
                  value={this.state.value}
                  onChange={this.handleChange}
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
