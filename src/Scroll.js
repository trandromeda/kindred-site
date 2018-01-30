import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    const nav = document.getElementById("email-bar");
    console.log(this.props.location)
    if (this.props.location !== prevProps.location) {
      nav.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start'
      })
    }
  }

  render() {
    return this.props.children
  }
}


export default withRouter(ScrollToTop);
