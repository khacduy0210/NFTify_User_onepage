import React, {useEffect, useState} from 'react';
import NewArrivalItem from './NewArrivalItem';
import { useDispatch,useSelector } from 'react-redux';
import { requestNewArrivalApiData } from '../../actions/NewArrivalAction';
import NewArrivalHeader from './NewArrivalHeader';

export default function NewArrival() {
    const [newArrivals, setNewArrivals] = useState([]);
    const dispatch = useDispatch();
    const products = useSelector(state => state.newArrival);
    console.log(products,'newArrival aaaaa');
    useEffect(() => {
        dispatch(requestNewArrivalApiData());
    },[])
    
    useEffect(() =>{
        setNewArrivals(products);
    },[products])
    
    const listProductNew = newArrivals.filter((product) => (product.sellOrder).status === 1);
    // const listProductComing = newArrivals.filter((product) => (product.sellOrder).status == 2);
    return (
        <div className="new-arrival">
            <div className="container">
                <div className="new-arrival-content">
                    <NewArrivalHeader/>
                    <NewArrivalItem 
                        NewArrivalList={listProductNew} 
                    />
                </div>
            </div>
        </div>
    )
}