import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-container">
            <div className="hero-content">
                <h2>Building Digital Experiences That Inspire</h2>
                <p>
                    Passionate Frontend Developer | Transforming Ideas into Seamless and
                    Visually Stunning Web Solutions
                </p>
            </div>

            <div className="hero-img">
               
                <div>
                    <img className="boy-pic" src="./images/cute-boy.webp" alt="Cute boy illustration" />
                </div>


             <div>
                
             <div className="tech-icon">
                    <img src="./images/react-96.png" alt="React Icon" />
                </div>

                <div className="tech-icon">
                    <img src="./images/html-96.png" alt="React Icon" />
                </div>
                <div className="tech-icon">
                    <img src="./images/javascript-64.png" alt="React Icon" />
                </div>
                <div className="tech-icon">
                    <img src="./images/Css-icon-96.png" alt="React Icon" />
                </div>

             </div>

            </div>
        </section>
    );
};

export default Hero;
