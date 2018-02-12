import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import DefaultOGImage from 'images/pans_lesson_og.jpg';
import './styles/App.css';

import NavBar from 'components/NavBar';
import Feature from 'components/Feature';
import Home from 'components/Home';
import About from 'components/About';
import Mentor from 'components/Mentor';
import Footer from 'components/Footer';
import Contact from 'components/Contact';
import Team from 'components/Team';
import CustomHead from 'components/CustomHead';

class App extends Component {
  constructor() {
    super();
    this.state = {
      emailInputStage: 1,
      email: '',
      firstname: '',
      lastname: ''      
    }
  }

  componentDidMount() {
    const nav = document.getElementById("navbar");
    window.onscroll = function() {
      if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
        nav.classList.add('scroll');
      } else {
        nav.classList.remove('scroll');
      }
    }
  }

  handleEmailChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();

    //~ Increment inputLevel, this will control which input we display ~//    
    this.setState((prevState, props) => {
      if (prevState.emailInputStage < 4) {
        return {emailInputStage: prevState.emailInputStage + 1};
      }
    });

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

  render() {
    const emailProps = {...this.state};
    return (
      <div className="App">
        <CustomHead
          type="website"
          url="https://getkindred.ca"
          image={DefaultOGImage}
          description="Kindred is a community for people to learn valuable life skills from retirees through small, in-person group lessons."
        />

        <NavBar />
        <Feature 
          handleChange={this.handleEmailChange}
          handleSubmit={this.handleEmailSubmit}         
          {...emailProps} 
        />

        <Switch>
          <Route exact path="/" render={(props) =>
            <Home
            handleChange={this.handleEmailChange}
            handleSubmit={this.handleEmailSubmit} 
            {...props}
            {...emailProps}
            />
          }/>
          <Route path="/about" component={About} />
          <Route path="/mentor" component={Mentor} />
          <Route path="/contact" component={Contact} />
          <Route path="/team" component={Team} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
