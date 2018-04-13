import React, { Component } from 'react';
import FlagQuestions, {QuestionStates} from './FlagQuestions';
import shuffle from 'shuffle-array';

class CountryGame extends Component {
    constructor(props){
        super(props);  
        this.state = {
          countries: [],
          options: [],
          correctOption: undefined,
          questionState: undefined
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newGame = this.newGame.bind(this);
    }
    
    componentDidMount(){
        const countriesURL = 'https://restcountries.eu/rest/v2/all';
        fetch(countriesURL)
        .then(data => data.json())
        .then(countries => {
            const correctOption = Math.floor(Math.random() * countries.length);
            const options = this._getOptions(correctOption, countries);
            this.setState({
                countries,
                correctOption,
                options,
                questionState: QuestionStates.QUESTION
            })
        })
    }
    
    _getOptions(correctOption,countries){
        let options = [correctOption];
        for(let i = 0; i < 3; i++){
            const random = Math.floor(Math.random() * countries.length);
            if(!options.includes(random)){
                options.push(random);
            } else{
                i--;
            }
        }
        return shuffle(options);
    }
    
    handleSubmit(userInput){
        userInput === this.state.correctOption ? 
                        this.setState({questionState: QuestionStates.ANSWER_CORRECT}) :
                        this.setState({questionState: QuestionStates.ANSWER_WRONG});
    }
    
    newGame(){
        const countries = this.state.countries;
        const correctOption = Math.floor(Math.random() * countries.length);
        const options = this._getOptions(correctOption, countries);
        this.setState({
            correctOption,
            options,
            questionState: QuestionStates.QUESTION
        });
    }
    
    render() {
        const {countries, options, correctOption, questionState} = this.state;
        
        let opts = options.map(i => {
                return { 
                            name: countries[i].name, 
                            id: i,
                };
        });
        let show = <h1>Loading....</h1>;
        if(options.length > 0){
            const {flag, name} = countries[correctOption];
            show = <FlagQuestions 
                        options={opts}
                        flag={flag}
                        name={name}
                        questionState={questionState}
                        onSubmit={this.handleSubmit}
                        newGame={this.newGame}
                    />
        }
        
        return (
          <div> 
            {show}
          </div>
        );
  }
}
    
export default CountryGame;