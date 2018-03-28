import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    render(){
        return (
            <div className='nav'>
                <div>Recipe App</div>
                <ul>
                    <li>New Recipe</li>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        )
    }
}

export default Navbar;