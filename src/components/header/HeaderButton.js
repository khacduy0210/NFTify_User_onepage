import React from "react";
import icon_search from "../../assets/icon-search.svg";
import binance from "../../assets/binance-coin-bnb-logo.svg";

export default function HeaderButton() {
    return (
        <div className="header-button">
            <div className="search-form">
                <input
                    type="search"
                    className="search-input"
                    placeholder="Search NFT"
                />
                <div className="icon-search">
                    <img src={icon_search} alt="" />
                </div>
            </div>
            <button className="button-connect-wallet">Connect Wallet</button>
            <button className="change-NFT">
                <img src={binance} />
            </button>
        </div>
    );
}
