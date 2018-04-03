import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css'

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe(){}
    }
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    render(){
        return (
            <div className='nav'>
                <div>Recipe App</div>
                <ul>
                    <li><a onClick={this.props.onNewRecipe}>New Recipe</a></li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;