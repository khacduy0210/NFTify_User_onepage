import React, { useEffect, useState } from "react";
import CategaryList from "./CategoryList";
import { useSelector, useDispatch } from "react-redux";
import { requestCategoryApiData } from "../../actions/CategoryAction";
import CategoryHeader from "./CategoryHeader";
import CategoryButtonLoadMore from "./CategoryButtonLoadMore";
import NoData from "../NoData";

export default function Category() {
    const [categories, setCategories] = useState([]);
    const dispatch = useDispatch();
    const category = useSelector((status) => status.homedata.category);
    console.log(category, "aaaaaa");

    useEffect(() => {
        dispatch(requestCategoryApiData());
    }, []);

    useEffect(() => {
        getCompletedCategory(category);
        setCategories(category);
    }, [category]);

    const getCompletedCategory = (categories) => {
        categories.forEach((category) => {
            category.imageUrl =
                category.iconUrl.indexOf("https://nftify") !== -1
                    ? category.imageUrl
                    : "https://nftify.ekoiosblock.com/" + category.imageUrl;
            category.iconUrl =
                category.iconUrl.indexOf("https://nftify") !== -1
                    ? category.iconUrl
                    : "https://nftify.ekoiosblock.com/" + category.iconUrl;
        });
    };
    return (
        <div className="category">
            <div className="container">
                <div className="category-content">
                    <CategoryHeader />
                    {typeof category === "object" ? (
                        <>
                            <CategaryList categories={categories} />
                            <CategoryButtonLoadMore />
                        </>
                    ) : (
                        <NoData />
                    )}
                    
                </div>
            </div>
        </div>
    );
}
