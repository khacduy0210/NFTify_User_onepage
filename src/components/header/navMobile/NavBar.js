import React from "react";
import NavMobileItem from "./NavMobileItem";
import NavMobileHeader from "./NavMobileHeader";
import NavMobileButton from "./NavMobileButton";

export default function NavBar() {
    return (
        <>
            <div className="navbar-mobile">
                <NavMobileHeader />
                <NavMobileItem />
                <NavMobileButton />
            </div>
        </>
    );
}
