import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    setTimeout(() => {
      let randomInstr = Math.floor(Math.random()*this.state.instructors.length);
      let randomHobb = Math.floor(Math.random());
      let newInstrArray = this.state.instructors.map((inst, i) => {
        if(i === randomInstr){
          const hobbies = [...inst.hobbies];
          hobbies.splice(randomHobb, 1);
          return {...inst, hobbies};
        } else {
          return inst;
        }
      });
      this.setState({instructors: newInstrArray});
    }, 5000);
    
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;