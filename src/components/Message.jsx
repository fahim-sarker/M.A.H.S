import React from 'react';
import Ban from "../assets/hteacher2.jpg";
import Ban2 from "../assets/asteacher2.jpg";
import active from "../assets/activities.jpeg";
import active2 from "../assets/club.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[50%] lg:right-0 right-[20px] z-40 cursor-pointer' onClick={onClick}>
            <FaAngleRight className='inline-block lg:text-[20px] text-white' />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#0096C7] rounded-full text-center flex justify-center items-center absolute top-[50%] lg:left-[-20px] left-0 z-40 cursor-pointer' onClick={onClick}>
            <FaAngleLeft className='inline-block lg:text-[20px] text-white' />
        </div>
    );
}

const Message = () => {
    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    return (
        <div className='py-[40px] sm:py-[80px]'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h3 className='text-[24px] sm:text-[36px] font-popins font-bold flex justify-center pb-6 sm:pb-10'>Message</h3>
                <div className="flex flex-wrap gap-4">
                    <div className="w-full sm:w-[48%] relative group">
                        <img src={Ban} alt="Chairman" className='w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl hover:scale-y-110 duration-700 ease-in-out' />
                        <div className="absolute bottom-[5%] left-[10px] sm:left-[20px]">
                            <h3 className='text-white text-[24px] sm:text-[36px] font-popins font-bold capitalize'>ambrose</h3>
                            <p className='text-white text-[16px] sm:text-[20px] font-popins font-normal capitalize pb-3'>chairman</p>
                            <div className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                                <button className='text-white text-[16px] sm:text-[18px] font-popins font-semibold capitalize bg-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-[#000] duration-700 ease-in-out'>read more</button>
                                <p className='text-black text-[14px] sm:text-[18px] font-popins font-normal capitalize pt-4 sm:pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis mollitia est maiores corrupti, totam officiis ea. Mollitia temporibus rem architecto!</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[48%] relative group">
                        <img src={Ban2} alt="Principal" className='w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl hover:scale-y-110 duration-700 ease-in-out' />
                        <div className="absolute bottom-[5%] left-[10px] sm:left-[20px]">
                            <h3 className='text-white text-[24px] sm:text-[36px] font-popins font-bold capitalize'>alexander</h3>
                            <p className='text-white text-[16px] sm:text-[20px] font-popins font-normal capitalize pb-3'>principal</p>
                            <div className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out">
                                <button className='text-white text-[16px] sm:text-[18px] font-popins font-semibold capitalize bg-red-500 px-6 sm:px-8 py-3 sm:py-4 rounded-sm hover:bg-[#000] duration-700 ease-in-out'>read more</button>
                                <p className='text-white text-[14px] sm:text-[18px] font-popins font-normal capitalize pt-4 sm:pt-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis mollitia est maiores corrupti, totam officiis ea. Mollitia temporibus rem architecto!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <h2 className='text-[24px] sm:text-[36px] font-popins font-bold flex justify-center pt-6 sm:pt-10 pb-4 sm:pb-5'>Our Main Activities</h2>
                <Slider {...settings}>
                    <div className="relative !w-[93%] bg-[#F6F7FB] shadow-2xl group">
                        <div className="flex justify-center items-center">
                            <img className='h-[200px] sm:h-[300px] w-full' src={active} alt="Activity" />
                        </div>
                        <div className="shadow-xl h-[120px] sm:h-[180px] bg-[#F6F7FB] group-hover:bg-[#01153E] duration-700 ease-in-out pl-3 sm:pl-5">
                            <p className='text-[#000] text-[14px] sm:text-[18px] font-popins font-normal capitalize pt-3 sm:pt-5 group-hover:text-white'>sports</p>
                            <p className='text-[#000] text-[12px] sm:text-[18px] font-popins font-normal capitalize pt-1 sm:pt-2 group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis mollitia est maiores corrupti, totam officiis ea. Mollitia temporibus rem architecto!</p>
                        </div>
                    </div>
                    <div className="relative !w-[93%] bg-[#F6F7FB] shadow-2xl group">
                        <div className="flex justify-center items-center">
                            <img className='h-[200px] sm:h-[300px] w-full' src={active2} alt="Activity" />
                        </div>
                        <div className="shadow-xl h-[120px] sm:h-[180px] bg-[#F6F7FB] group-hover:bg-[#01153E] duration-700 ease-in-out pl-3 sm:pl-5">
                            <p className='text-[#000] text-[14px] sm:text-[18px] font-popins font-normal capitalize pt-3 sm:pt-5 group-hover:text-white'>history</p>
                            <p className='text-[#000] text-[12px] sm:text-[18px] font-popins font-normal capitalize pt-1 sm:pt-2 group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis mollitia est maiores corrupti, totam officiis ea. Mollitia temporibus rem architecto!</p>
                        </div>
                    </div>
                    <div className="relative !w-[93%] bg-[#F6F7FB] shadow-2xl group">
                        <div className="flex justify-center items-center">
                            <img className='h-[200px] sm:h-[300px] w-full' src={active} alt="Activity" />
                        </div>
                        <div className="shadow-xl h-[120px] sm:h-[180px] bg-[#F6F7FB] group-hover:bg-[#01153E] duration-700 ease-in-out pl-3 sm:pl-5">
                            <p className='text-[#000] text-[14px] sm:text-[18px] font-popins font-normal capitalize pt-3 sm:pt-5 group-hover:text-white'>club activities</p>
                            <p className='text-[#000] text-[12px] sm:text-[18px] font-popins font-normal capitalize pt-1 sm:pt-2 group-hover:text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis mollitia est maiores corrupti, totam officiis ea. Mollitia temporibus rem architecto!</p>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Message;
