import React from "react";

export default function CategaryList({ categories }) {
    return (
        <div className="category-list">
            {categories.map((category, index) => {
                return (
                    <div key={index} className="category-item">
                        <div className="category-item-image">
                            <img src={category.imageUrl} />
                        </div>
                        <button className="category-item-button">
                            <img
                                className="category-item-icon"
                                src={category.iconUrl}
                            />
                            {category.name}
                        </button>
                    </div>
                );
            })}
        </div>
    );
}
