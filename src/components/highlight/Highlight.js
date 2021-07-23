import React, {useEffect, useState} from'react';



import ComingSoonItem from '../comingSoon/ComingSoonItem';
import NewArrivalItem from '../newArrivals/NewArrivalItem';

import axios from 'axios';
import HighlightItem from './highlightItem';
import { useDispatch, useSelector } from 'react-redux';
import { requestHighlightApiData } from '../../actions/HighlightAction';

export default function Highlight() {
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //     axios.get('https://nftify.ekoiosblock.com/api/user-nftify/highlight/list?objectIds=60da99f200b1370fbe8e97fb%2C60e7fc7893f44b49cb71a95e%2C60da8b2a00b1370fbe8e97bc')
    //     .then(function (response) {
    //         setProducts(((response.data).data).records);
            
            
            
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    // }, []);
    const dispatch = useDispatch();
    const products = useSelector(state => state.highlight);
    useEffect(() => {
        dispatch(requestHighlightApiData());
    },[])
    // const listProductNew = products.filter((product) => (product.sellOrder).status == 1);
    // const listProductComing = products.filter((product) => (product.sellOrder).status == 2);
    return (
        <div className="highlight">
            <div className="container">
                <div className="highlight-content">
                    <div className="highlight-header">
                        <h2 className="highlight-title">Highlight</h2>
                    </div>
                    <div className="highlight-list">
                        <div className="highlight-item">
                            {products.map((product,index) => 
                                { 
                                    if (index == 0) {
                                        // console.log(product.categoriesId);
                                        return (
                                            <HighlightItem 
                                        imageUrl={product.imageUrl}
                                        nameOfItem={product.name}
                                        categoriesId={(product.categoriesId)}
                                        numberOfCopies={product.numberOfCopies}
                                        saleQuantity={(product.sellOrder).saleQuantity}
                                        currencyName={(product.sellOrder).currencyName}
                                        price={(product.sellOrder).price}
                                        realPrice={(product.sellOrder).price * (product.sellOrder).exchangeRate}
                                        />
                                        )
                                    };
                                    
                                
                                    
                                }
                            )}
                        </div>
                            
                        <div className="highlight-item-other">
                            
                        {products.map((product,index) => 
                            { 
                                if (index !== 2 && index !== 1 && (product.sellOrder).status === 1) {
                                    return (
                                        <NewArrivalItem 
                                            key={index}
                                            itemImg={product.imageUrl}
                                            nameOfItem={product.name}
                                            numberOfCopies={product.numberOfCopies}
                                            saleQuantity={(product.sellOrder).saleQuantity}
                                            currencyName={(product.sellOrder).currencyName}
                                            price={(product.sellOrder).price}
                                            realPrice={(product.sellOrder).price * (product.sellOrder).exchangeRate}
                                            className={'highlight-item-other-1'}
                                        />
                                    )
                                };
                                if ((product.sellOrder).status === 2 && index !== 2 && index !== 1) {
                                    return (
                                        <ComingSoonItem 
                                            key={index}
                                            itemImg={product.imageUrl}
                                            nameOfItem={product.name}
                                            numberOfCopies={product.numberOfCopies}
                                            className={'highlight-item-other-2'}
                                        />
                                    )
                                };
                                
                            
                                
                                
                            }
                        )}
                        <div className="item-2">
                            {products.map((product,index) => 
                                { 
                                    if (index !== 2 && index !== 0 && (product.sellOrder).status === 1) {
                                        return (
                                            <NewArrivalItem 
                                                key={index}
                                                itemImg={product.imageUrl}
                                                nameOfItem={product.name}
                                                numberOfCopies={product.numberOfCopies}
                                                saleQuantity={(product.sellOrder).saleQuantity}
                                                currencyName={(product.sellOrder).currencyName}
                                                price={(product.sellOrder).price}
                                                realPrice={(product.sellOrder).price * (product.sellOrder).exchangeRate}
                                                className={'highlight-item-other-1'}
                                            />
                                        )
                                    };
                                    if ((product.sellOrder).status === 2 && index !== 2 && index !== 0) {
                                        return (
                                            <ComingSoonItem 
                                                key={index}
                                                itemImg={product.imageUrl}
                                                nameOfItem={product.name}
                                                numberOfCopies={product.numberOfCopies}
                                                className={'highlight-item-other-2'}
                                            />
                                        )
                                    };
                                    
                                
                                    
                                    
                                }
                            )}
                        </div>
                            

                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}