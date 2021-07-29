import React, { useEffect, useState } from 'react';
import CatogaryList from './CategoryList';
import { useSelector,useDispatch  } from 'react-redux';
import { requestCategoryApiData } from '../../actions/CategoryAction';
import CategoryHeader from './CategoryHeader';
import CategoryButtonLoadMore from './CategoryButtonLoadMore';

export default function Category() {
    const [categories, setCategories] = useState([]);
    
    const dispatch = useDispatch();
    const category = useSelector(status => status.category)
    console.log(category, "aaaaaa");
    
    useEffect(() => {
        dispatch(requestCategoryApiData());
    },[])
    
    useEffect(() => {
        getCompletedCategory(category);
        setCategories(category);
    },[category])

    const getCompletedCategory = (categories) => {
        categories.forEach((category) => {
            category.imageUrl= category.iconUrl.indexOf('https://nftify') !== -1 ? category.imageUrl : 'https://nftify.ekoiosblock.com/' + category.imageUrl;
            category.iconUrl= category.iconUrl.indexOf('https://nftify') !== -1 ? category.iconUrl : 'https://nftify.ekoiosblock.com/' + category.iconUrl;
        });
    }
    return(
        <div className="category">
            <div className="container">
                <div className="category-content">
                    <CategoryHeader/>
                    <CatogaryList
                        categories={categories}
                    />
                    <CategoryButtonLoadMore/>
                </div>
            </div>
        </div>
    )
}