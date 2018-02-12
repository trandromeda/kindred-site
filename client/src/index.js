import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Scroll from './Scroll';
import registerServiceWorker from './registerServiceWorker';
import { Route } from 'react-router-dom'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-113987961-1');

const withTracker = (WrappedComponent) => {
  const trackPage = (page) => {
    ReactGA.set({ page });
    ReactGA.pageview(page);
    console.log(page);
  };

  const HOC = (props) => {
    const page = props.location.pathname;
    trackPage(page);

    return (
      <WrappedComponent {...props} />
    );
  };

  return HOC;
};

ReactDOM.render((
  <Router>
    <Scroll>
      <Route component={withTracker(App)} />
    </Scroll>
  </Router>
  ), document.getElementById('root'));
registerServiceWorker();
