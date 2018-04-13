import React from 'react';
import {QuestionStates} from './FlagQuestions';

const FlagAnswers = props => {
    let {name, questionState, newGame} = props;
    return (
        <div>
            {questionState === QuestionStates.ANSWER_CORRECT ? <p>That's correct! It's {name}</p> : <p>Incorrect. The correct answer is {name}</p>}
            <button onClick={newGame}>Next Question</button>
        </div>
    )
}

export default FlagAnswers;