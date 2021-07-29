import React, { useState } from 'react';
import banner1 from '../../assets/banner.png';
import BannerItem from './BannerItem';

const initialBanner = [
    {
        banner: banner1,
        title: "Let's Write Something About Your Store! ",
        discription: "Use overlay text to give your customers insight into your brand. Select imagery and text that relates to your style and story."
    }
]

export default function Banner() {
    const [banners, setBanners] = useState(initialBanner);
    return(
        <div className="banner">
            <div className="container">
                <BannerItem banners={banners}/>
            </div>
        </div>
    )
}