import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter } from 'react-router-dom'

class Scroll extends React.Component {
  componentDidUpdate(prevProps) {
    const nav = document.getElementById("email-bar");
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


export default withRouter(Scroll);
