import React from 'react';
import './W1Problem.scss'
import theme_pattern from "../../assets/theme_pattern.svg";

const W1Problem = () => {
    return (
        <div className='w1-problem'>
            <div className="title-box">
                <h1>Problem</h1>
                <img src={theme_pattern} alt=""/>
            </div>
        </div>
    );
};

export default W1Problem;