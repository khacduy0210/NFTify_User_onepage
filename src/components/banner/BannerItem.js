import React from "react";
export default function BannerItem({ banners }) {
    return (
        <>
            {banners.map((banner, index) => {
                return (
                    <div key={index} className="banner-item">
                        <div className="banner-image">
                            <div className="banner-content">
                                <div className="banner-title">
                                    {banner.title}
                                </div>
                                <div className="banner-discription">
                                    {banner.discription}
                                </div>
                                <button className="explore-button">
                                    EXPLORE NOW
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
