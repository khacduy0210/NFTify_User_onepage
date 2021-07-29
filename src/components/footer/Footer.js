import React from 'react'
import FooterLogo from './FooterLogo';
import FooterAbout from './FooterAbout'
import FooterContact from './FooterContact'
import FooterSocialMedia from './FooterSocialMedia'

export default function Footer() {
    return ( 
        <div className = "footer" > 
            <div className="container row">
                <FooterLogo/>
                <FooterAbout/>
                <FooterContact/>
                <FooterSocialMedia/>   
            </div>  
        </div>
    );
}