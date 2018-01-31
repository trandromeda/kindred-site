import { Component } from 'react';
import { withRouter } from 'react-router-dom'

class Scroll extends Component {
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
