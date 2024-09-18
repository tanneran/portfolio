import React from 'react';
import './About.scss'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img_huiyi.jpg'

const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt=""/>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt=""/>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            I am a <span>Product Engineer</span> with professional expertise in the field. Throughout my career, I have had the privilege of collaborating with prestigious organizations, contributing to their success and growth.
                        </p>
                        <p>
                            Over the years, I have honed my skills in leading market and competitive analysis, researching user pain points, developing and testing prototypes, and optimizing products to ensure efficiency and cost-effectiveness. My expertise in quality control and troubleshooting has consistently ensured that products meet the highest standards.
                        </p>
                    </div>
                    <div className="fields">
                        <div className="field"><p>Project</p>
                            <p>Management</p></div>
                        <div className="field"><p>Product</p>
                            <p>Design</p></div>
                        <div className="field"><p>User</p>
                            <p>Research</p></div>
                        <div className="field"><p>Software</p>
                            <p>Development</p></div>
                        <div className="field"><p>Data</p>
                            <p>Analysis</p></div>
                        <div className="field"><p>Usability</p>
                            <p>Testing</p></div>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>Figma</p>
                            <hr style={{width: "51%"}}/>
                        </div>
                        <div className="about-skill"><p>Adobe Suite</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill"><p>HTML&CSS</p>
                            <hr style={{width: "48%"}}/>
                        </div>
                        <div className="about-skill"><p>JavaScript</p>
                            <hr style={{width: "52%"}}/>
                        </div>
                        <div className="about-skill"><p>React&Redux</p>
                            <hr style={{width: "48%"}}/>
                        </div>
                        <div className="about-skill"><p>TypeScript</p>
                            <hr style={{width: "30%"}}/>
                        </div>
                        <div className="about-skill"><p>SQL and DB</p>
                            <hr style={{width: "40%"}}/>
                        </div>
                        <div className="about-skill"><p>Node JS</p>
                            <hr style={{width: "60%"}}/>
                        </div>
                        <div className="about-skill"><p>AWS</p>
                            <hr style={{width: "30%"}}/>
                        </div>
                        <div className="about-skill"><p>Git</p>
                            <hr style={{width: "40%"}}/>
                        </div>
                        <div className="about-skill"><p>Tableau</p>
                            <hr style={{width: "40%"}}/>
                        </div>
                        <div className="about-skill"><p>Jira</p>
                            <hr style={{width: "20%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div><hr/>
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div><hr/>
                <div className="about-achievement">
                    <h1>5+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    );
};

export default About;