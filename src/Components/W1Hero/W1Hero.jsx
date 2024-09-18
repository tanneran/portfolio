import React from 'react';
import arrow_icon from "../../assets/arrow_icon.svg";
import './W1Hero.scss'

const W1Hero = () => {
    return (
        <div className="w1-hero">
            <div className="w1-hero-left">
                <h1 className="title">DrayEasy</h1>
                <div className="line"></div>
                <div className="w-tag">
                    <div className="tag"><p>B2B</p></div>
                    <div className="tag"><p>WebApp</p></div>
                    <div className="tag"><p>Product design</p></div>
                    <div className="tag"><p>User research</p></div>
                </div>
                <p className="impact">Tanner worked in the Product Design team to revamp DrayEasy's Transportation Management
                    Service Website.</p>

                <div className="viewdeck">
                    <p>View full deck</p>
                    <img src={arrow_icon} alt=""/>
                </div>
                <div className="productlink" >
                    <p>Product link</p>
                    <img src={arrow_icon} alt=""/>
                </div>
            </div>

            <div className="w1-hero-right">

            </div>
        </div>
    );
};

export default W1Hero;