import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
const APIURL = '/api/todos';

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: []  
    };
    this.addTodo = this.addTodo.bind(this);
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
  
  addTodo(newTodo){
    fetch(APIURL, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({name: newTodo})
    })
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
    .then(newTodo => {
      this.setState({todos: [...this.state.todos, newTodo]});
    });
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
        <TodoForm 
          addTodo={this.addTodo}
        />
        {todos}
      </div>
    );
  }
}

export default TodoList;
