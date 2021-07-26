import React, { useEffect, useState } from 'react'
import logo from '../../assets/Logo.svg';
import twitter from '../../assets/social_media/Twitter.svg'
import discord from '../../assets/social_media/Discord.svg'
import instagram from '../../assets/social_media/Instagram.svg'
import medium from '../../assets/social_media/Medium.svg'
import telegram from '../../assets/social_media/Telegram.svg'

export default function Footer() {
    const [aboutValues, setAboutValues] = useState(false);
    const [contactValues, setContactValues] = useState(false);
    const HandleAboutClick = () => {
        setAboutValues(!aboutValues);
        if(!aboutValues === true ) {setContactValues(false);}
    }
    
    const handleContactClick = () => {
        setContactValues(!contactValues);
        if(!contactValues === true) {setAboutValues(false);}
    }
    useEffect(() => {
        if(contactValues === true) {setAboutValues(false);}
        if(aboutValues === true ) {setContactValues(false);}
    },[contactValues,aboutValues]);
    return ( 
        <div className = "footer" > 
            <div className="container">
                <div className="footer-left-side">
                    <div className = "logo" >
                        <a href="#" className="navbar-brand d-flex align-items-center">
                                    <img src={logo} className="app-logo" alt="logo"/></a>
                        <div className="dicription">The New Creative Economy</div>  
                    </div> 
                </div>      
                <div className="footer-right-side">
                    <label htmlFor="checkbox__about" className = "about" > ABOUT 
                        <input type="checkbox" id="checkbox__about" style={{display : 'none'}} defaultChecked={aboutValues} onClick={HandleAboutClick} />
                        <div className="about-list">
                            <div className="about-item"><a href="#"> About us </a></div>
                            <div className="about-item"><a href="#" > Terms of Service </a></div>
                            <div className="about-item"><a href="#" > Privacy Policy </a></div>
                            <div className="about-item"><a href="#" > FAQs </a></div>
                        </div>
                    </label> 
                    <label htmlFor="checkbox__contact-us" className = "contact-us" > CONTACT 
                    <input type="checkbox" id="checkbox__contact-us" style={{display : 'none'}} defaultChecked={contactValues} onClick={handleContactClick}/>
                    <div className="contact-list">
                            <div className="contact-item"><a href="#" ><span className="far fa-envelope"/>support@nftify.com</a></div>
                            <div className="contact-item"><a href="#" ><span className="fas fa-phone"/>(+84) 123 456 789</a></div>
                        </div>
                    </label> 
                    <div className = "social-media" > SOCIAL MEDIA 
                        <div className="socail-list">
                            <a href="#" className="icon"><img src={twitter} alt="twitter-icon"/></a>
                            <a href="#" className="icon"><img src={medium} alt="medium-icon"/></a>
                            <a href="#" className="icon"><img src={telegram} alt="telegram-icon"/></a>
                            <a href="#" className="icon"><img src={discord} alt="discord-icon"/></a>
                            <a href="#" className="icon"><img src={instagram} alt="instagram-icon"/></a>
                        </div>
                    </div>     
                </div> 
            </div>  
            
        </div>
    )
}