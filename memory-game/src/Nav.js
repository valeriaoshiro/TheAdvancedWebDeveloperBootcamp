import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <h1>Memory Game</h1>
        <ul>
          <li>New Game</li>
        </ul>
      </div>
    );
  }
}

export default Nav;