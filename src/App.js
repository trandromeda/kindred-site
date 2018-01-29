import React, { Component } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <div className="user-preference">
        <h1>Do you want to:</h1>
        Learn | Mentor
        </div>
      </div>
    );
  }
}

export default App;
