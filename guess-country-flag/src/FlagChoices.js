import React from 'react';

const FlagChoices = props => {
    let {options, handleChange, handleSubmit} = props;
    
    let opts = options.map(opt => {
        return (
            <label key={opt.id}>
                <input type="radio"
                     value={opt.id}
                     checked={opt.checked}
                     onChange={handleChange}
                     name="flag-choice" />
                {opt.name}
            </label>
        )
    })
    
    return (
        <form onSubmit={handleSubmit}>
            {opts}
            <br/><button type="submit">Submit</button>
        </form>
    )
}

export default FlagChoices;