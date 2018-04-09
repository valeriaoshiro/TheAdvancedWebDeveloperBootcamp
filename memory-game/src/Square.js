import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  static defaultProps = {
    onClick(){}
  }
  render() {
    const {id, cardState, backgroundColor, onClick} = this.props;
    return (
      <div 
        className="square" 
        style={cardState === 0 ? {backgroundColor: 'gray'} : {backgroundColor}} 
        onClick={() => onClick(id)}
      />
    );
  }
}

export default Square;