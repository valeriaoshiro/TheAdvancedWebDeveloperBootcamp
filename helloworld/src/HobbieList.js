import React, {Component} from 'react';

class HobbieList extends Component {
    render(){
        const liStyle = {fontSize: '1.5em'};
        let hobbies = ['Sleep', 'Eat', 'Cuddle'];
        return(
            <ul>
                {hobbies.map((hobbie, index) => {
                    return <li key={index} style={liStyle}>{hobbie}</li>
                })}
            </ul>
        )
    }
}

export default HobbieList;