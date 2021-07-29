import React, {useEffect, useState } from 'react';
import ComingSoonItem from './ComingSoonItem';
import { useDispatch, useSelector } from 'react-redux';
import { requestComingSoonApiData } from '../../actions/ComingSoonAction';
import ComingSoonHeader from './ComingSoonHeader';

export default function ComingSoon() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.comingSoon);
    console.log(products,'coming');
    useEffect(() => {
        dispatch(requestComingSoonApiData())
    },[])
    const listProductComing = products.filter((product) => (product.sellOrder).status == 2);
    return (
        <div className="coming-soon">
            <div className='container'>
                <div className="coming-soon-content">
                    <ComingSoonHeader/>
                    <ComingSoonItem 
                        ComingSoonList={listProductComing}
                    />
                </div>
            </div>
        </div>
    )
}