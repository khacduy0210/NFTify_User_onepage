import React, { useEffect, useState } from "react";
import ComingSoonItem from "./ComingSoonItem";
import { useDispatch, useSelector } from "react-redux";
import { requestComingSoonApiData } from "../../actions/ComingSoonAction";
import ComingSoonHeader from "./ComingSoonHeader";
import NoData from "../NoData";

export default function ComingSoon() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.homedata.coming_soon);
    console.log(products, "coming");
    useEffect(() => {
        dispatch(requestComingSoonApiData());
    }, []);
    return (
        <div className="coming-soon">
            <div className="container">
                <div className="coming-soon-content">
                    <ComingSoonHeader />
                    {typeof products === "object" ? (
                        <ComingSoonItem ComingSoons={products} />
                    ) : (
                        <NoData />
                    )}
                </div>
            </div>
        </div>
    );
}
