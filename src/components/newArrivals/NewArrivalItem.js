import React from 'react';

export default function NewArrivalItem({itemImg, nameOfItem,numberOfCopies,saleQuantity,currencyName , price, realPrice, className}) {
    
    return (
        <div className="item">
            <div className={`NewArrival-item ${className}`}>
            
            <div className="NewArrival-item-content">
            <img src={itemImg} className="NewArrival-item-image"/>
                <div className="NewArrival-item-name">{nameOfItem}</div>
                <div className="NewArrival-item-edit">Edition {saleQuantity} of {numberOfCopies} </div>
                <div className="NewArrival-item-price">{price} {currencyName}<span> ~ ${realPrice}</span></div>
            </div>
            
        </div>
        </div>
    )
}