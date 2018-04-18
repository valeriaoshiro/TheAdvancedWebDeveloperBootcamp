import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: 'lol'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.state.inputValue);
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text'
                    value={this.state.inputValue}
                    onChange={e => {
                        this.setState({inputValue: e.target.value})
                    }}
                />
                <button type='submit'>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;