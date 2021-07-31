import React from "react";
import HeaderButton from "./HeaderButton";
import HeaderNavbar from "./HeaderNavbar";
import NavMobile from "./navMobile/NavMobile";

export default function Header() {
    return (
        <div className="header">
            <div className="container">
                <div className="header-content">
                    <HeaderNavbar />
                    <HeaderButton />
                    <NavMobile />
                </div>
            </div>
        </div>
    );
}
