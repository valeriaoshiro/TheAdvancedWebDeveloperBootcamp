import React, { Component } from 'react';
import TodoItem from './TodoItem';
const APIURL = '/api/todos';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []  
    };
  }
  
  componentDidMount(){
    this.loadTodos();
  }
  
  loadTodos(){
    fetch(APIURL)
    .then(resp => {
      if(!resp.ok){
        if(resp.status >= 400 && resp.status < 500){
          return resp.json().then(data => {
            let err = {errorMessage: data.message};
            throw err;
          })
        } else {
          let err = {errorMessage: 'Please try again later'};
          throw err;
        }
      }
      return resp.json();
    })
    .then(todos => {
        this.setState({todos})
    })
  }

  render() {
    const todos = this.state.todos.map(todo => {
      return <TodoItem 
              {...todo}
              key={todo._id}
              />
    })
    return (
      <div>
        <h1>This is the todolist file</h1>
        {todos}
      </div>
    );
  }
}

export default TodoList;
