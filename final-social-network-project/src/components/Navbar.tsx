import React from "react";
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className='nav'>
            <div className='item'>
                <a href="#">Profile</a>
            </div>
            <div>
                <a href="#">Messages</a>
            </div>
            <div>
                <a href="#">News</a>
            </div>
            <div>
                <a href="#">Music</a>
            </div>
            <div>
                <a href="#">Settings</a>
            </div>
        </nav>
    )
}