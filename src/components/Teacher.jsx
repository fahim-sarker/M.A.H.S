import React from 'react';
import Ban from "../assets/hteacher2.jpg";
import Ban2 from "../assets/asteacher2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[40%] lg:right-0 right-[10px] z-40 cursor-pointer' onClick={onClick}>
            <FaAngleRight className='text-white text-[16px] lg:text-[20px]' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] h-[30px] w-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[40%] lg:left-[-20px] left-0 z-40 cursor-pointer' onClick={onClick}>
            <FaAngleLeft className='text-white text-[16px] lg:text-[20px]' />
        </div>
    );
}

const Teacher = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <div className='py-10 sm:py-20'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className='text-center text-[24px] sm:text-[30px] lg:text-[36px] font-popins font-bold capitalize pb-10 sm:pb-20'>
                    Teacher List
                </h3>
                <Slider {...settings}>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban} alt="Ambrose" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Ambrose</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Chairman</h3>
                        </div>
                    </div>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban} alt="Alexender" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Alexender</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Principal</h3>
                        </div>
                    </div>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban2} alt="Alexender" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Alexender</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Principal</h3>
                        </div>
                    </div>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban} alt="Alexender" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Alexender</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Principal</h3>
                        </div>
                    </div>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban2} alt="Alexender" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Alexender</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Principal</h3>
                        </div>
                    </div>
                    <div className="group h-auto sm:h-[400px]">
                        <div className="w-[80%] sm:w-[350px] rounded-full h-auto sm:h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg lg:group-hover:shadow-[blue] duration-700 ease-in-out mx-auto">
                            <img className='h-[150px] sm:h-[178px] w-[150px] sm:w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={Ban} alt="Alexender" />
                        </div>
                        <div className="text-center mt-4">
                            <h2 className='text-[16px] sm:text-[20px] font-joss font-bold capitalize'>Alexender</h2>
                            <h3 className='text-[14px] sm:text-[18px] font-joss font-bold'>Principal</h3>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Teacher;
