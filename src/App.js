import React, { Component } from 'react';
import './styles/App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Preview from './components/Preview';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <div className="user-preference">
        <h1>Preview</h1>
        <Preview />
        </div>
      </div>
    );
  }
}

export default App;
