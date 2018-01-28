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
      </div>
    );
  }
}

export default App;
