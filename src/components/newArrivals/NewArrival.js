import React, {useEffect, useState } from 'react';
import NewArrivalItem from './NewArrivalItem';
import { useDispatch,useSelector } from 'react-redux';
import { requestProductApiData } from '../../actions/ProductAction';

export default function NewArrival() {
    // 
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    console.log(products,'newArrival');

    useEffect(() => {
        dispatch(requestProductApiData())
    },[])
    const listProductNew = products.filter((product) => (product.sellOrder).status == 1);
    
    // console.log(listProductNew);
    return (
        <div className="NewArrival">
            <div className="container">
                <div className="NewArrival-content">
                    <div className="NewArrival-header">
                        <h2 className="NewArrival-title">New Arrivals</h2>
                        <a href="#" className="NewArrival-browse-all">Browse all</a>
                    </div>
                    <div className="NewArrival-list row">
                        {listProductNew.map((product,index) => (
                            <NewArrivalItem 
                                key={index}
                                itemImg={product.imageUrl}
                                nameOfItem={product.name}
                                numberOfCopies={product.numberOfCopies}
                                saleQuantity={(product.sellOrder).saleQuantity}
                                currencyName={(product.sellOrder).currencyName}
                                price={(product.sellOrder).price}
                                realPrice={(product.sellOrder).price * (product.sellOrder).exchangeRate}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}