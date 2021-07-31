import React from "react";
import logo from "../../../assets/Logo.svg";
import close from "../../../assets/icon-close.svg";

export default function NavMobileHeader() {
    return (
        <div className="navbar-mobile-header">
            <div className="navbar-mobile-logo">
                <img src={logo} />
            </div>
            <label htmlFor="checkbox-bars" className="nav-mobile-close">
                <img className="close-icon" src={close} />
            </label>
        </div>
    );
}
