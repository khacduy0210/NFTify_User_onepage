import React from "react";

export default function HighlightItem({ item }) {
    console.log(item, "main highlight");
    return (
        <div className="highlight-item">
            <div className="highlight-image">
                <img src={item.imageUrl} alt="" />
            </div>
            <div className="highlight-discription">
                <div className="highlight-name">{item.name}</div>
                <div className="highlight-tag row">
                    {item.categoriesId.map((category, index) => {
                        return (
                            <span key={index} className="highlight-tag-item">
                                {category.name}
                            </span>
                        );
                    })}
                </div>
                <div className="highlight-edit">
                    Edition {item.sellOrder.saleQuantity} of
                    {item.sellOrder.numberOfCopies}
                </div>
                <div className="highlight-price">
                    {item.sellOrder.price} {item.sellOrder.currencyName}
                </div>
                <div className="hilight-real-price">
                    ~ ${item.sellOrder.price * item.sellOrder.exchangeRate}
                </div>
                <div className="highlight-discript">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla quam velit, vulputate eu pharetra nec, mattis ac
                    neque. Duis vulputate commodo lectus, ac blandit elit
                    tincidunt id. Sed rhoncus, tortor sed eleifend tristique,
                    tortor mauris
                </div>
                <div className="read-more">Read more</div>
                <div className="highlight-button">
                    <button className="buy-now">Buy now</button>
                    <button className="make-offer">Make offer</button>
                </div>
            </div>
        </div>
    );
}
