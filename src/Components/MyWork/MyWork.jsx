import './MyWork.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
import { useNavigate } from 'react-router-dom';
import Navbar from "../Navbar/Navbar.jsx";
import {useState} from "react";


const MyWork = () => {
    const navigate = useNavigate()
    return (
        <div id='work' className='mywork'>
            <div className="title-box">
                <h1>My Works</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">



                {mywork_data.map(
                    (work, index) => {
                        if (index===0) {
                            return <div className='conimg'>
                                <img key={index} src={work.w_img} alt="" onClick={window.open(work.w_url,'_blank')}/>
                                <div className='divP'><p>{work.w_desc}</p>
                            </div>

                            </div>
                        } else {
                            // return <div className='conimg' onClick={() => {
                            //     document.title = `Works/${work.w_name}`
                            //     navigate(`/Works/${work.w_name}`)
                            // }}><img key={index + 1} src={work.w_img} alt="" />
                            //     <p>{work.w_desc}</p>
                            // </div>
                            return <div className='conimg'>
                                <img key={index + 1} src={work.w_img} alt="" />
                                <div className='divP'><p>{work.w_desc}</p>
                                </div>
                            </div>
                        }

                    })}
            </div>
            {/*<div className="mywork-showmore">*/}
            {/*    <p>Show more</p>*/}
            {/*    <img src={arrow_icon} alt=""/>*/}
            {/*</div>*/}
        </div>
    );
};

export default MyWork;