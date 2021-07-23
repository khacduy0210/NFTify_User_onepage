import React, {useEffect, useState } from 'react';
import ComingSoonItem from './ComingSoonItem';

import { useDispatch, useSelector } from 'react-redux';
import { requestProductApiData } from '../../actions/ProductAction';


export default function ComingSoon() {
    
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get('https://nftify.ekoiosblock.com/api/user-nftify')
    //     .then(function (response) {
            
    //         setProducts(((response.data).data).records);
            
            
    //     })
    //     .catch(function (error) {
            
    //         console.log(error);
    //     })
        
    // }, []);
    const dispatch = useDispatch();
    const products = useSelector(state => state.product);
    console.log(products,'coming');

    useEffect(() => {
        dispatch(requestProductApiData())
    },[])
    const listProductComing = products.filter((product) => (product.sellOrder).status == 2);
    
    // console.log(listProductComing);
    
    return (
        <div className="comingSoon">
            <div className='container'>
                <div className="comingSoon-content">
                    <div className="comingSoon-header">
                        <h2 className="comingSoon-title">Coming Soon</h2>
                        <a href="#" className="comingSoon-browse-all">Browse all</a>
                    </div>
                    <div className="comingSoon-list row">
                        {listProductComing.map((product,index) => (
                            <ComingSoonItem 
                                key={index}
                                itemImg={product.imageUrl}
                                nameOfItem={product.name}
                                numberOfCopies={product.numberOfCopies}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}