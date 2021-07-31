import React from "react";
import logo from "../../../assets/Logo.svg";
import close from "../../../assets/icon-close.svg";
import icon_search from "../../../assets/icon-search.svg";

export default function NavMobileSearchBar() {
    return (
        <>
            <div className="search-bar">
                <div className="navbar-mobile-header">
                    <div className="navbar-mobile-logo">
                        <img src={logo} />
                    </div>
                    <label
                        htmlFor="checkbox-search"
                        className="nav-mobile-close"
                    >
                        <img className="close-icon" src={close} />
                    </label>
                </div>
                <div className="mobile-search-form">
                    <input
                        type="search"
                        className="mobile-search-input"
                        placeholder="Name"
                    />
                    <div className="mobile-icon-search">
                        <img src={icon_search} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}
