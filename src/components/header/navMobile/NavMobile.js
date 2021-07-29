import React from 'react';
import bars from '../../../assets/icon-bars.svg';
import NavBar from './NavBar';

export default function NavMobile() {
    return (
        <>
            <label htmlFor="checkbox-bars" className="nav-mobile">
                <img className="bars-icon" src={bars}/>
            </label>
            <input type="checkbox" id="checkbox-bars" style={{display : 'none'}}/>
            <label htmlFor="checkbox-bars" className="nav-overlay"/>
            <NavBar/>
        </>
    )
}