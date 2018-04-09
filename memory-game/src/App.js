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
  HIDING: 0,
  SHOWING: 1,
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
    this.handleColor = this.handleColor.bind(this);
  }
  
  handleNew(){
    let cards = this.state.cards.map(c => {
      return {...c, cardState: CardState.HIDING}
    })
    cards = shuffle(cards);  
    this.setState({cards});
  }
  
  handleColor(squareId){
    this.setState((prevState, props) => {
        let updateCard = prevState.cards.find(c => c.id === squareId);
        if(updateCard.cardState === CardState.HIDING){
          updateCard.cardState = CardState.MATCHING;
        } else {
          updateCard.cardState = CardState.HIDING;
        }
        return {...prevState.cards, updateCard}
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
          onColor={this.handleColor}
        />
      </div>
    );
  }
}

export default App;
