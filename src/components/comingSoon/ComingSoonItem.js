import React from 'react';

export default function ComingSoonItem({itemImg, nameOfItem, numberOfCopies,className}) {
    return (
        <div className="item">
            <div className={` ${className} comingSoon-item`}>
            
            <div className="comingSoon-item-content">
            <img src={itemImg} className="comingSoon-item-image"/>
                <div className="comingSoon-item-name">{nameOfItem}</div>
                <div className="comingSoon-item-edit">Edition of {numberOfCopies}</div>
                <div className="comingSoon-item-status">COMING SOON</div>
            </div>
            
        </div>
        </div>
    )
}