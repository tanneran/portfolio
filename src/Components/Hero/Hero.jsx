import React from 'react';
import './Hero.scss'
import profile_img from '../../assets/profile_img_huiyi_2.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
    return (
        <div className='hero'>
                <img src={profile_img} alt="Profile image"/>

            <h1><span>I'm Tanner Huiyi An</span></h1>
            <p>I have more than 3 years of professional experience. I provided services in product design, UIUX design, product engineering, project management, marketing, and sales.</p>
            <div className="hero-action">
                <div className="hero-connect">
                    <AnchorLink className='anchor-link' offset={90} href='#contact'>Make magic with Me
                    </AnchorLink>
                </div>
                {/*<div className="hero-resume" onClick={()=> {*/}
                {/*    const url='https://drive.google.com/file/d/11Lj5lmbxKP6U2ZNg-jHlV_xn50NXFo1g/view?usp=sharing'*/}
                {/*    window.open(url,'_blank')*/}
                {/*}}>*/}
                {/*    My resume*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Hero;