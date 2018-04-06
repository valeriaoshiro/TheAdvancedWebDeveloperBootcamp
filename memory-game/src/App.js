import React, { Component } from 'react';
import Nav from './Nav';
import Board from './Board';
import './App.css';

function shuffle(array) {
  let counter = array.length;
  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);
    // Decrease counter by 1
    counter--;
    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}

const CardState = {
  HIDING: 1,
  SHOWING: 0,
  MATCHING: 2
}

class App extends Component {
  constructor(props){
    super(props);  

    let cards = [
      {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
      {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
      {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
      {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
      {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
      {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
      {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
      {id: 14, cardState: CardState.HIDING, backgroundColor: 'peru'},
      {id: 15, cardState: CardState.HIDING, backgroundColor: 'peru'}
    ]
    
    this.state = {cards: shuffle(cards)};
    
    this.handleNew = this.handleNew.bind(this);
  }
  
  handleNew(){this.setState((prevState, props) => {
      let newCards = shuffle(prevState.cards);
      return newCards.map(c => {
        return {...c, cardState: CardState.HIDING}
        
      })
    });
  }
  
  render() {
    return (
      <div className="App">
        <Nav 
          onNew={this.handleNew} 
        />
        <Board 
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default App;
