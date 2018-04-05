import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
  render() {
    const squares = Array(16).fill(<Square />);
    
    return (
      <div className="board">
        {squares}
      </div>
    );
  }
}

export default Board;