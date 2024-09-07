import React from 'react';
import Ban from "../assets/demo.webp";
import Ban2 from "../assets/demo2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[40%] lg:right-[20px] right-[10px] z-40 cursor-pointer' onClick={onClick}>
            <FaAngleRight className='inline-block lg:text-[20px] text-white' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[40%] lg:left-[20px] left-[10px] z-40 cursor-pointer' onClick={onClick}>
            <FaAngleLeft className='inline-block lg:text-[20px] text-white' />
        </div>
    );
}

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className=''>
            <Slider {...settings}>
                <div className="">
                    <img src={Ban} alt="banner" className='w-full h-[200px] sm:h-[400px] lg:h-[600px] object-cover' />
                </div>
                <div className="">
                    <img src={Ban2} alt="banner" className='w-full h-[200px] sm:h-[400px] lg:h-[600px] object-cover' />
                </div>
                <div className="">
                    <img src={Ban} alt="banner" className='w-full h-[200px] sm:h-[400px] lg:h-[600px] object-cover' />
                </div>
                <div className="">
                    <img src={Ban2} alt="banner" className='w-full h-[200px] sm:h-[400px] lg:h-[600px] object-cover' />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
