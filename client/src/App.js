import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './styles/App.css';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Mentor from './components/Mentor';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Team from './components/Team';

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
    console.log(emailProps);
    return (
      <div className="App">
        <NavBar />
        <Landing 
          handleChange={this.handleEmailChange}
          handleSubmit={this.handleEmailSubmit}         
          {...emailProps} 
        />

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

        <Footer />
      </div>
    );
  }
}

export default App;
