import React from "react";

export default function ComingSoonItem({ ComingSoons }) {
    const ComingSoonList = ComingSoons.filter(
        (product) => product.sellOrder.status == 2,
    );
    console.log(ComingSoonList, "test cs list");
    return (
        <div className="coming-soon-list">
            {ComingSoonList.map((ComingSoon, index) => {
                return (
                    <div key={index} className="coming-soon-item">
                        <div className="coming-soon-item-content">
                            <div className="coming-soon-item-image">
                                <img src={ComingSoon.imageUrl} />
                            </div>
                            <div className="coming-soon-item-name">
                                {ComingSoon.name}
                            </div>
                            <div className="coming-soon-item-edit">
                                Edition of {ComingSoon.numberOfCopies}
                            </div>
                            <div className="coming-soon-item-status">
                                COMING SOON
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
