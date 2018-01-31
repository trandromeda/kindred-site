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

    // Increment inputLevel, this will control which input we display
    this.setState((prevState, props) => {
      if (prevState.inputLevel < 4) {
        return {inputLevel: prevState.inputLevel + 1};
      }
    })

    const data = {
      email: this.state.email,
      firstname: this.state.firstname,
      lastname: this.state.lastname
    }

    if (!!data.lastname) {
      this.subscribe(data);
    }
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

  renderInput = (level) => {
    switch (level) {
      case 1:
        return <input 
          id="email"
          type="text" 
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder=" Enter your email for early access"
        />   
      case 2:
        return <input 
          type="text" 
          name="firstname"
          className="first-name"
          value={this.state.firstname}
          onChange={this.handleChange}
          placeholder=" What's your first name?"
        />
      case 3:
        return <input 
          type="text" 
          name="lastname"
          className="last-name"
          value={this.state.lastname}
          onChange={this.handleChange}
          placeholder=" And last name?"
        />         
      default:
        return <input 
          type="text" 
          name="done"
          value=''
          onChange={this.handleChange}
          placeholder=" Thank you!"
        /> 
      break;      
    }
  }

  render() {

    return (
        <div className="email-bar" id="email-bar">
          <div className="left"></div>

          <div className="mid-section">
            <div className="middle-top"></div>

              <form className="input-box" onSubmit={this.handleSubmit}>
                  {this.renderInput(this.state.inputLevel)}                         
                  <input 
                    type="submit" 
                    value={this.state.submitText}
                    className="signup-button" 
                  />
              </form>

            <div className="middle-bottom"></div>
          </div>

          <div className="right"></div>

        </div>
      )
  }
}

export default EmailBar;
