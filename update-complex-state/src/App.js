import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

const InstructorItem = props => {
  return (
    <li key={props.key}>
      <h3>{props.name}</h3>
      <h4>Hobbies: {props.hobbies.join(", ")}</h4>
    </li>
  );
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  hobbies: PropTypes.arrayOf(PropTypes.string)
}

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
      <InstructorItem 
        key={index}
        name={instructor.name}
        hobbies={instructor.hobbies}
      />
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