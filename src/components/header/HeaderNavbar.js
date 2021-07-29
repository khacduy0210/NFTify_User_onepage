import React from 'react';
import HeaderLogo from './HeaderLogo';

export default function HeaderNavbar() {
    return (
        <div className="nav">
            <HeaderLogo/>
            <ul className="navbar">
                <li className="nav-item"><a href=""> Home </a></li>
                <li className="nav-item"><a href=""> Discovery </a></li>
                <li className="nav-item"><a href=""> History </a></li>
            </ul>
        </div>
    );
}