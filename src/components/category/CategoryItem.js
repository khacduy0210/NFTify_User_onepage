import React from 'react';

export default function CatogaryItem({category_name, icon_url, image_url}) {
    return (
        <div className="category-item">
            <img src={image_url} className="category-item-image"/>
            <button className="category-item-button"><img className="category-item-icon" src={icon_url}/> {category_name}</button>
        </div>
    )
}