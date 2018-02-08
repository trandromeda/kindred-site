import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import Close from '../images/close.svg';

class BurgerMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  showSettings = (event) => {
    event.preventDefault();
  }  

  render() {
    return (
      <Menu right isOpen={this.state.visible} customCrossIcon={ <img src={Close} /> }>
        <Link to="/about" className="about">About</Link>
        <Link to="/mentor" className="mentor">Mentor</Link>
        <Link to="/contact" className="contact">Contact</Link>       
      </Menu>
    )   
  }

}

export default BurgerMenu;

