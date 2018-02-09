import React, { Component } from 'react';

class EmailBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitText: 'Ok!'
    }
  }

  respondToSubmit = () => {
    if (this.props.emailInputStage <= 2) {
      this.textInput.focus();
    }
  }

  renderInput = (level) => {
    switch (level) {
      case 1:
        return <input 
          id="email"
          type="text" 
          name="email"
          value={this.props.email}
          onChange={this.props.handleChange}
          placeholder="Enter your email to get updates"
          ref={(input) => { this.textInput = input; }}
        />   
      case 2:
        return <input 
          type="text" 
          name="firstname"
          className="first-name"
          value={this.props.firstname}
          onChange={this.props.handleChange}
          placeholder="What's your first name?"
          ref={(input) => { this.textInput = input; }}
        />
      case 3:
        return <input 
          type="text" 
          name="lastname"
          className="last-name"
          value={this.props.lastname}
          onChange={this.props.handleChange}
          placeholder="And last name?"
          ref={(input) => { this.textInput = input; }}
        />         
      default:
        return <input 
          type="text" 
          name="done"
          value=''
          onChange={this.props.handleChange}
          placeholder="Thank you!"
        /> 
    }
  }

  render() {
    const submitText = this.props.emailInputStage === 1 ? 'Ok!' : 'Enter';
    return (
        <div className="email-bar">
          <div className="left"></div>

          <div className="mid-section">
            <div className="middle-top"></div>
              <div className="middle-middle">
                <form className="input-box" onSubmit={this.props.handleSubmit}>
                    {this.renderInput(this.props.emailInputStage)}                         
                    <input 
                      type="submit" 
                      value={submitText}
                      className="signup-button"
                      onClick={this.respondToSubmit} 
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
