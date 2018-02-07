import React, { Component } from 'react';

class EmailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputLevel: 1,
      submitText: 'Ok!',
      email: '',
      firstname: '',
      lastname: ''
    }
  }

  // componentDidMount() {
  //   document.getElementById("email").focus();
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();  

    //~ Increment inputLevel, this will control which input we display ~//
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
    .then(function(response) {
      console.log(response);
      if (response.status >= 200 && response.status < 300) {
        return response
      } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
      }      
    })
    .catch((err) => {
      console.log("error", err);
    });    
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
          placeholder="Enter your email to get updates"
          ref={(input) => { this.textInput = input; }}
        />   
      case 2:
        return <input 
          type="text" 
          name="firstname"
          className="first-name"
          value={this.state.firstname}
          onChange={this.handleChange}
          placeholder="What's your first name?"
        />
      case 3:
        return <input 
          type="text" 
          name="lastname"
          className="last-name"
          value={this.state.lastname}
          onChange={this.handleChange}
          placeholder="And last name?"
        />         
      default:
        return <input 
          type="text" 
          name="done"
          value=''
          onChange={this.handleChange}
          placeholder="Thank you!"
        /> 
    }
  }

  render() {
    const divStyle = this.props.fill ? {backgroundColor: '#32DBC4'} : {backgroundColor: 'transparent'};
    const submitText = this.state.inputLevel === 1 ? 'Ok!' : 'Enter';
    return (
        <div className="email-bar" id="email-bar">
          <div className="left"></div>

          <div className="mid-section">
            <div className="middle-top"></div>
              <div 
              className="middle-middle"
              style={divStyle}
              >
                <form className="input-box" onSubmit={this.handleSubmit}>
                    {this.renderInput(this.state.inputLevel)}                         
                    <input 
                      type="submit" 
                      value={submitText}
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
