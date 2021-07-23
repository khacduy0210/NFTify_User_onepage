import React, { useEffect, useState } from 'react';
import CatogaryItem from './CategoryItem';
import { useSelector,useDispatch  } from 'react-redux';
import { requestCategoryApiData } from '../../actions/CategoryAction';





export default function Category() {
    // const [categories, setCategories] = useState([]);
    
    const dispatch = useDispatch();
    const categories = useSelector(status => status.category);
    // console.log(categories,1);
    useEffect(() => {
        dispatch(requestCategoryApiData());
        // setCategories(category);
    },[]);
    
    // console.log(categories,'a');
    
    
    const notComplete = categories.filter((category) => category.iconUrl.indexOf('https://nftify') === -1);
    notComplete.map((category) => {
        category.imageUrl = 'https://nftify.ekoiosblock.com/' + category.imageUrl;
        category.iconUrl = 'https://nftify.ekoiosblock.com/' + category.iconUrl;
    })
    // const completed = categories.filter((category) => category.iconUrl.indexOf('https://nftify') != -1);
    // const a = [...completed, ...notComplete]
 
    // console.log(notComplete,categories);

    
    return(
        <div className="category">
            <div className="container">
                <div className="category-content">
                    <div className="category-header">
                        <h2 className="category-title">Shop by category</h2>
                        <a href="#" className="category-browse-all">Browse all</a>
                    </div>

                    <div className="category-list row">
                    {categories.map((category,index) => (
                        <CatogaryItem
                            key={index}
                            category_name={category.name}
                            icon_url= {category.iconUrl}
                            image_url={category.imageUrl}
                        />
                        ))}
                    </div>
                    <button className="load-more-button">Load more</button>
                    
                </div>
            </div>
        </div>
    )
}