import React from 'react';
import NavMobileItem from './NavMobileItem';
import NavMobileHeader from './NavMobileHeader';
import search from '../../../assets/icon-search-mobile.svg';
import NavMobileSearchBar from './NavMobileSearchBar';

export default function NavBar() {
    return(  
        <>
            <div className="navbar-mobile">
                <NavMobileHeader/>
                <NavMobileItem/>
                <label htmlFor="checkbox-search" style={{width : '100%'}} className="button-search-mobile"><img src={search} className="icon-search-mobile"/> Search</label>
                <input type="checkbox" id="checkbox-search" style={{display : 'none'}}/>
                <NavMobileSearchBar/>
                <button className="button-connect-wallet-mobile">Connect Wallet</button>
            </div>
        </>
    );
}