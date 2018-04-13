import React, { Component } from 'react';
import FlagChoices from './FlagChoices';
import FlagAnswers from './FlagAnswers';

const QuestionStates = {
    QUESTION: 1,
    ANSWER_WRONG: 2,
    ANSWER_CORRECT: 3
}

class FlagQuestions extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: undefined
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({userInput: Number(e.target.value)});
    }
    
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubmit(this.state.userInput);
    }
    
    render() {
        const {options, flag, name, questionState, newGame} = this.props;
        let opts = options.map(i => {
            return {
                        ...i,
                        checked: this.state.userInput === i.id
                    }
        });
        return (
            <div>
                {questionState === QuestionStates.QUESTION ? 
                    <FlagChoices 
                        options={opts}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    /> :
                    <FlagAnswers 
                        name={name}
                        questionState={questionState}
                        newGame={newGame}
                    />
                }
                <img src={flag} alt='Country flag' style={{width: '400px', height: '200px'}}/>
            </div>
            )
    }
}

export default FlagQuestions;
export {QuestionStates};