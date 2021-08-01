import React from "react";
import Shopping from "../assets/shopping.svg";

export default function NoData() {
    return (
        <div className="no-data">
            <div className="icon-nodata">
                <img src={Shopping} alt="" />
            </div>
            <div className="text-nodata">no item</div>
        </div>
    );
}
