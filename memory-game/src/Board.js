import React, { Component } from 'react';
import Square from './Square';
import './Board.css';

class Board extends Component {
  render() {
    const squares = this.props.cards.map((c, i) => {
                       return <Square key={c.id} {...c} onClick={this.props.onClick} />
                   })
    
    return (
      <div className="board">
        {squares}
      </div>
    );
  }
}

export default Board;