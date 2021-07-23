import React from 'react';


export default function HighlightItem({imageUrl, nameOfItem, categoriesId,price, saleQuantity, currencyName,realPrice,numberOfCopies}) {
    
    return(
        <>
            <div className="highlight-image col-xs-4"><img src={imageUrl} /></div>
            <div className="highlight-discription col-sm-5">
                <div className="highlight-name">{nameOfItem}</div>
                <div className="highlight-tag">
                    {(categoriesId).map((category) => {
                        return(<span className="highlight-tag-item">{category.name}</span>)
                        
                    })}
                
                </div>
                <div className="highlight-edit">Edition {saleQuantity} of {numberOfCopies}</div>
                <div className="highlight-price">{price} {currencyName}</div>
                <div className="hilight-real-price">~ ${realPrice}</div>
                <div className="highlight-discript">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus, tortor sed eleifend tristique, tortor mauris </div>
                <div className="read-more">Read more</div>
                <button className="buy-now">Buy now</button>
                <button className="make-offer">Make offer</button>
            </div>
        </>
    )
}