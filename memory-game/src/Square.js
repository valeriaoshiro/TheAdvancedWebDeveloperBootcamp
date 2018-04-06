import React, { Component } from 'react';
import './Square.css';

class Square extends Component {
  static defaultProps = {
    onColor(){}
  }
  render() {
    const {id, cardState, backgroundColor, onColor} = this.props;
    return (
      <div 
        className="square" 
        style={cardState === 0 ? {backgroundColor: 'gray'} : {backgroundColor}} 
        onClick={() => onColor(id)}
      />
    );
  }
}

export default Square;