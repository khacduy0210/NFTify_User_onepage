import React from 'react';
import twitter from '../../assets/social_media/Twitter.svg'
import discord from '../../assets/social_media/Discord.svg'
import instagram from '../../assets/social_media/Instagram.svg'
import medium from '../../assets/social_media/Medium.svg'
import telegram from '../../assets/social_media/Telegram.svg'

export default function FooterSocialMedia() {
    return (
        <div className = "social-media" > SOCIAL MEDIA 
            <div className="socail-list">
                <div href="" className="icon"><img src={twitter} alt="twitter-icon"/></div>
                <div href="" className="icon"><img src={medium} alt="medium-icon"/></div>
                <div href="" className="icon"><img src={telegram} alt="telegram-icon"/></div>
                <div href="" className="icon"><img src={discord} alt="discord-icon"/></div>
                <div href="" className="icon"><img src={instagram} alt="instagram-icon"/></div>
            </div>
        </div>
    );
}