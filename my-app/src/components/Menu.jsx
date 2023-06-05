import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';


const Menu = () => {
    return (
        <nav class="navbar">
            <ul>
            <li class="link"> <Link to="/">Home</Link></li>
                <li class="link"> <Link to="/login">Login</Link></li>
                <li class="link"> <Link to="/favorites">Favorites</Link></li>
                <li class="link"> <Link to="/search">Search</Link></li>

            </ul>
        </nav>
    )
}
export default Menu;
