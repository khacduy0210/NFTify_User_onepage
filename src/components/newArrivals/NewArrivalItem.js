import React from "react";

export default function NewArrivalItem({ NewArrivalList }) {
    console.log(NewArrivalList, "test na list");
    return (
        <div className="new-arrival-list">
            {NewArrivalList.map((NewArrival, index) => {
                return (
                    <div key={index} className="new-arrival-item">
                        <div className="new-arrival-item-content">
                            <div className="new-arrival-item-image">
                                <img src={NewArrival.imageUrl} alt="" />
                            </div>
                            <div className="new-arrival-item-name">
                                {NewArrival.name}
                            </div>
                            <div className="new-arrival-item-edit">
                                Edition {NewArrival.saleQuantity} of{" "}
                                {NewArrival.numberOfCopies}{" "}
                            </div>
                            <div className="new-arrival-item-price">
                                {NewArrival.sellOrder.price}{" "}
                                {NewArrival.sellOrder.currencyName}
                                <span>
                                    {" "}
                                    ~ $
                                    {Number(
                                        (
                                            NewArrival.sellOrder.price *
                                            NewArrival.sellOrder.exchangeRate
                                        ).toFixed(4),
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
