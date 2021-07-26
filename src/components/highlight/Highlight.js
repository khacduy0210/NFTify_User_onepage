import React, {useEffect} from'react';



import ComingSoonItem from '../comingSoon/ComingSoonItem';
import NewArrivalItem from '../newArrivals/NewArrivalItem';


import HighlightItem from './highlightItem';
import { useDispatch, useSelector } from 'react-redux';
import { requestHighlightApiData } from '../../actions/HighlightAction';

export default function Highlight() {
    const dispatch = useDispatch();
    const products = useSelector(state => state.highlight);
    useEffect(() => {
        dispatch(requestHighlightApiData());
    },[])
    
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
                                    if (index === 2) {
                                        // console.log(product.categoriesId);
                                        return (
                                            <HighlightItem 
                                            key={index}
                                            imageUrl={product.imageUrl}
                                            nameOfItem={product.name}
                                            categoriesId={(product.categoriesId)}
                                            numberOfCopies={product.numberOfCopies}
                                            saleQuantity={(product.sellOrder).saleQuantity}
                                            currencyName={(product.sellOrder).currencyName}
                                            price={(product.sellOrder).price}
                                            realPrice={(product.sellOrder).price * (product.sellOrder).exchangeRate}
                                            />
                                        );
                                    };
                                    
                                
                                    
                                }
                            )}
                        </div>
                            
                        <div className="highlight-item-other">
                            
                        {products.map((product,index) => 
                            { 
                                if (index !== 0 && index !== 2 && (product.sellOrder).status === 1) {
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
                        <div className="item-2">
                            {products.map((product,index) => 
                                { 
                                    if (index !== 1 && index !== 2 && (product.sellOrder).status === 1) {
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
                                    if ((product.sellOrder).status === 2 && index !== 1 && index !== 2) {
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