import React from 'react';

export default function HighlightOther({item}){
    return (
        <div  className="other-item">
            <div className="other-item-content">
                <div className="other-item-image"><img src={item.imageUrl}  alt=""/></div>
                <div className="other-item-name">{item.name}</div>
                <div className="other-item-edit">Edition {item.saleQuantity} of {item.numberOfCopies} </div>
                {(item.sellOrder).status === 2 ?
                    <div className="other-item-status">COMING SOON</div>
                :   <div className="other-item-price">{(item.sellOrder).price} {(item.sellOrder).currencyName}<span> ~ ${Number(((item.sellOrder).price * (item.sellOrder).exchangeRate).toFixed(4))}</span></div>
                }
            </div>
        </div>
    );
}