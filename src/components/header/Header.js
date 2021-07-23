import React from 'react'

import logo from '../../assets/Logo.svg';
import binance from '../../assets/binance-coin-bnb-logo.svg';
import bars from '../../assets/bars-solid.svg';
import close from '../../assets/times-solid.svg';
import home from '../../assets/home-solid.svg';
import discovery from '../../assets/discover.svg';
import history from '../../assets/history.svg';


export default function Header() {
    return (
        <div className="header">
            <div className="container" >
                <div className="nav-bar">
                    <div className="left-side">
                    
                    {/*nav on mobile */}
                        <label for="checkbox-bars" className="nav-mobile">
                            <img className="bars-icon" src={bars}/>
                        </label>
                        <input type="checkbox" id="checkbox-bars" style={{display : 'none'}}/>
                        <label for="checkbox-bars" className="nav-overlay"/>

                        <ul className="navbar-mobile">
                            <label for="checkbox-bars" className="nav-mobile-close">
                                <img className="close-icon" src={close}/>
                            </label>
                            <li className="nav_mobile-item active"><img className="nav_mobile-icon" src={home} /><a href="#" className="nav-link "> Home </a></li>
                            <li className="nav_mobile-item active"><img className="nav_mobile-icon" src={discovery} /><a href="#" className="nav-link "> Discovery </a></li>
                            <li className="nav_mobile-item active"><img className="nav_mobile-icon" src={history    } /><a href="#" className="nav-link "> History </a></li>
                            <li className="nav_mobile-item"><button className="button-connect-wallet-mobile">Connect Wallet</button></li>
                            <li className="nav_mobile-item"><button className="change-NFT-mobile"><img src={binance} /></button></li>
                        </ul>
                        

                    {/*nav on website */}
                        <a href="#" className="navbar-brand d-flex align-items-center">
                            <img src={logo} className="app-logo" alt="logo"/></a>
                        <div className="border-space"/>
                        <ul className="navbar-nav">
                            <li className="nav-item active"><a href="#" className="nav-link "> Home </a></li>
                            <li className="nav-item active"><a href="#" className="nav-link "> Discovery </a></li>
                            <li className="nav-item active"><a href="#" className="nav-link "> History </a></li>
                        </ul>
                    </div>
                    <div className="right-side">
                        <div className="input-control round search-form" >
                            <input type="search" className="form-control rounded " placeholder="Search NFT" aria-label="Search" aria-describedby="search-addon" />
                            
                            {/* <i className="fas fa-search" id="mdb-5-search-icon"/> */}
                            
                        </div>
                        <button className="button-connect-wallet">Connect Wallet</button>
                        <button className="change-NFT"><img src={binance} /></button>
                    </div>
                        
                </div>
            </div>
            
        </div>
    )
}
