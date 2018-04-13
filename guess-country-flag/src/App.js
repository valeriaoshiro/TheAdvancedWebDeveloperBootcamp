import React, { Component } from 'react';
import CountryGame from './CountryGame';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App"> 
        <CountryGame />
      </div>
    );
  }
}

export default App;

//https://restcountries.eu/rest/v2/all