import React from "react";
import logo from "../../assets/Logo.svg";

export default function FooterLogo() {
    return (
        <div className="logo">
            <a href="#" className="navbar-brand d-flex align-items-center">
                <img src={logo} className="app-logo" alt="logo" />
            </a>
            <div className="dicription">The New Creative Economy</div>
        </div>
    );
}
