import React from "react";
import logo from "../../assets/Logo.svg";

export default function HeaderLogo() {
    return (
        <div className="header-logo">
            <a href="#" className="logo">
                <img src={logo} className="app-logo" alt="logo" />
            </a>
            <div className="border-space" />
        </div>
    );
}
