import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'
import './index.css';
import App from './App';
import Scroll from './Scroll';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <Scroll>
      <App />
    </Scroll>
  </Router>
  ), document.getElementById('root'));
registerServiceWorker();
