import React from 'react';
import './W1Overview.scss'
import theme_pattern from "../../assets/theme_pattern.svg";
import overview_img from "../../assets/w1_overview.png"
import features from "../../assets/w1_features.svg"
import contributions from "../../assets/location.svg"
import team from "../../assets/head.svg"

const W1Overview = () => {
    return (
        <div className="w1-overview">
            <div className="title-box">
                <h1>Overview</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="overview-img">
                <img src={overview_img} alt=""/>
                <div className="overview-imgnotes">
                    <div className="note">Port of charge</div>
                    <div className="note">Intermodal</div>
                    <div className="note">Last mileage</div>
                </div>
            </div>
            <p className="poverview">DrayEasy revolutionizes the drayage process by streamlining logistics, delivering
                top-tier services, and enhancing operational visibility. Our UI/UX design played a pivotal role in
                shaping the product to achieve these goals.</p>
            <div className="overview-details">
                <div className="details-left">
                    <img src={features} alt=""/>
                </div>
                <div className="details-right">
                    <div className="seq">
                        <div className="seq-icon">
                            <img src={contributions} alt=""/>
                        </div>
                        <div className="seq-key">
                            <div className="seq-h1">Tanner's contributions
                                <p>as a product designer</p></div>
                            <div className="seq-h2">
                                <p>User research & testing</p>
                                <p>Competitive research</p>
                                <p>Concept ideation</p>
                                <p>Project management</p>
                                <p>UIUX design</p>
                                <p>Prototyping</p>
                                <p>Developer handoff</p>
                            </div>
                        </div>
                    </div>
                    <div className="seq">
                        <div className="seq-icon">
                            <img src={team} alt=""/>
                        </div>
                        <div className="seq-key">
                            <div className="seq-h1">The product team</div>
                            <div className="seq-h2">3x Designers, 2x Engineers</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default W1Overview;