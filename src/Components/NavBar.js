import React from 'react';
import '../index.css';
import {Link} from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='NavBar'>
                <Link to="/" className='x-large-text semibold link' >doutormultas</Link>
        </div>
    )
}

export default NavBar;