import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  render() {
    const {cardState, backgroundColor} = this.props;
    return (
      <div className="square" style={cardState === 0 ? {backgroundColor: 'gray'} : {backgroundColor}}>
      </div>
    );
  }
}

export default Square;