import React, { Component } from 'react';

class EmailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLevel: 1,
      submitText: 'Enter',
      email: '',
      firstname: '',
      lastname: ''
    }
  }

  componentDidMount() {
    document.getElementById("email").focus();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();    
    const data = {
      email: this.state.value
    }
    this.subscribe(data);
  }

  subscribe = (data) => {
    fetch('/api/subscribe', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(this.checkStatus)
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
              <form onSubmit={this.handleSubmit}>
                <input 
                  id="email"
                  type="text" 
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  placeholder=" Your email"
                />
                {/*}
                <input 
                  type="text" 
                  name="firstname"
                  className="first-name"
                  value={this.state.firstname}
                  onChange={this.handleChange}
                  placeholder=" Your email"
                />
                <input 
                  type="text" 
                  name="lastname"
                  className="last-name"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  placeholder=" Your email"
                />     
                */}                           
                <input 
                  type="submit" 
                  value={this.state.submitText}
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
