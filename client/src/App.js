import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './styles/App.css';

import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Home from './components/Home';
import About from './components/About';
import Mentor from './components/Mentor';
import Footer from './components/Footer';
import ComingSoon from './components/ComingSoon';
import Contact from './components/Contact';
import Team from './components/Team';

class App extends Component {

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

  render() {
    return (
      <div className="App">
        <NavBar />
        <Landing />

        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/mentor" component={Mentor} />
        <Route path="/coming-soon" component={Contact} />
        <Route path="/team" component={Team} />

        <Footer />
      </div>
    );
  }
}

export default App;
