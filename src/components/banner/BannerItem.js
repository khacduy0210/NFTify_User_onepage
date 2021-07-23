import React from 'react';


export default function BannerItem({banner,title, discription}) {
    return(
        <div className="banner-item" >

            
            <table className="banner-image" >
                
                <div className="banner-content">
                    <div className="banner-title">{title}</div>
                    <div className="banner-discription">{discription}</div>
                    <button className="explore-button">EXPLORE NOW</button>
                </div>
                {/* <img src={banner}/> */}
            </table>
            
            
        </div>
    )
}