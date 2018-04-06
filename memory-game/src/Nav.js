import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
  static defaultProps = {
    onNew(){}
  }
  render() {
    const {onNew} = this.props;
    return (
      <div className="nav">
        <h1>Memory Game</h1>
        <ul>
          <li><a onClick={onNew}>New Game</a></li>
        </ul>
      </div>
    );
  }
}

export default Nav;