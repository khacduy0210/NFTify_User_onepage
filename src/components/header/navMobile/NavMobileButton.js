import React from "react";
import search from "../../../assets/icon-search-mobile.svg";
import NavMobileSearchBar from "./NavMobileSearchBar";

export default function NavMobileButton() {
    return (
        <div className="nav-mobile-button">
            <label htmlFor="checkbox-search" className="button-search-mobile">
                <img src={search} className="icon-search-mobile" /> Search
            </label>
            <input type="checkbox" id="checkbox-search" />
            <NavMobileSearchBar />
            <button className="button-connect-wallet-mobile">
                Connect Wallet
            </button>
        </div>
    );
}
