import React, { useRef } from "react";
import Slider from "react-slick";
import "./WorkExperience.css";
import { WORK_EXPERIENCE } from "../Utils/data";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const CustomArrow = ({ className, onClick }) => (
    <div className={className} onClick={onClick}>
        <span className="arrow"></span>
    </div>
);

const WorkExperience = () => {
    const sliderRef = useRef();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <CustomArrow className="slick-next" />,
        prevArrow: <CustomArrow className="slick-prev" />,
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <section className="experience-container">
            <h5>Work Experience</h5>

            <div className="experience-content">
                
                <Slider ref={sliderRef} {...settings}>
                    {WORK_EXPERIENCE.map((item) => (
                        <ExperienceCard key={item.title} details={item} />
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default WorkExperience;
