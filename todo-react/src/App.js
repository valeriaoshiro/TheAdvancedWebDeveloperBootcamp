import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      inputText: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    const data = [...this.state.data,
                  this.state.inputText];
	 this.setState({data, inputText: ''});
  }
  render() {
    const todos = this.state.data.map((t, i) => {
      return (
        <li key={i}>{t}</li>  
      )
    });
    return (
      <div className="App">
          <h1>Simple Todo App</h1>
          <form onSubmit={this.handleClick}>
    	      <input
    		      type='text'
    		      name='inputText'
    		      value={this.state.inputText}
    		      onChange={e => {
    			      this.setState({[e.target.name]: e.target.value})
              }}
            />
            <button type='submit'>SAVE</button>
          </form>
          <ol>
            {todos}
          </ol>
      </div>
    );
  }
}

export default App;
