import React, { useEffect, useState } from "react";
import NewArrivalItem from "./NewArrivalItem";
import { useDispatch, useSelector } from "react-redux";
import { requestNewArrivalApiData } from "../../actions/NewArrivalAction";
import NewArrivalHeader from "./NewArrivalHeader";
import NoData from "../NoData";

export default function NewArrival() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.homedata.new_arrival);
    console.log(products, "newArrival aaaaa");
    useEffect(() => {
        dispatch(requestNewArrivalApiData());
    }, []);
    return (
        <div className="new-arrival">
            <div className="container">
                <div className="new-arrival-content">
                    <NewArrivalHeader />
                    {typeof products === "object" ? (
                        <NewArrivalItem NewArrivals={products} />
                    ) : (
                        <NoData />
                    )}
                </div>
            </div>
        </div>
    );
}
