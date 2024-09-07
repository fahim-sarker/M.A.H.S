import React from 'react';
import { IoMdArrowDropright } from "react-icons/io";
import { BiSolidMessageEdit } from "react-icons/bi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='pt-10 bg-black pb-10'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between border-b-2 border-[#cccc] pb-5">
                    <div className="w-full sm:w-[40%] mb-5 sm:mb-0">
                        <h3 className='text-[30px] sm:text-[35px] font-popins font-bold w-[100px] text-white border-b-2 border-[#FFFF]'>Links</h3>
                        <ul className='pt-5 sm:pt-10'>
                            <li className='flex gap-x-3 text-white items-center text-[18px] sm:text-[20px] font-popins font-medium pb-3 hover:text-[#cccc] duration-300 ease-in-out'><IoMdArrowDropright className='text-[24px] sm:text-[30px]' />XI Class Admission: 2023-24</li>
                            <li className='flex gap-x-3 text-white items-center text-[18px] sm:text-[20px] font-popins font-medium pb-3 hover:text-[#cccc] duration-300 ease-in-out'><IoMdArrowDropright className='text-[24px] sm:text-[30px]' />National Curriculum and Textbook Board (NCTB)</li>
                            <li className='flex gap-x-3 text-white items-center text-[18px] sm:text-[20px] font-popins font-medium pb-3 hover:text-[#cccc] duration-300 ease-in-out'><IoMdArrowDropright className='text-[24px] sm:text-[30px]' />Directorate of Secondary and Higher Education</li>
                            <li className='flex gap-x-3 text-white items-center text-[18px] sm:text-[20px] font-popins font-medium pb-3 hover:text-[#cccc] duration-300 ease-in-out'><IoMdArrowDropright className='text-[24px] sm:text-[30px]' />Cumilla Education Board</li>
                            <li className='flex gap-x-3 text-white items-center text-[18px] sm:text-[20px] font-popins font-medium pb-3 hover:text-[#cccc] duration-300 ease-in-out'><IoMdArrowDropright className='text-[24px] sm:text-[30px]' />Ministry of Education</li>
                        </ul>
                    </div>
                    <div className="w-full sm:w-[35%] mb-5 sm:mb-0">
                        <h3 className='text-[30px] sm:text-[35px] font-popins font-bold w-[220px] text-white border-b-2 border-[#FFFF] pb-5'>Google Map</h3>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234331.7858359377!2d90.48141845382213!3d23.40867902431847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754559f11f26c55%3A0x35aa595c987c19ee!2sMatlab%20Uttar%20Upazila!5e0!3m2!1sen!2sbd!4v1725723186752!5m2!1sen!2sbd" 
                            width="100%" 
                            height="250" 
                            className="w-full h-350px"
                            style={{border: 0}} 
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div className="w-full sm:w-[20%]">
                        <h3 className='text-[30px] sm:text-[35px] font-popins font-bold w-[220px] text-white border-b-2 border-[#FFFF] pb-5'>Feedback</h3>
                        <div className="flex items-center pt-5">
                            <BiSolidMessageEdit className='text-[24px] sm:text-[30px] text-white' />
                            <h3 className='text-[20px] sm:text-[30px] font-popins font-bold ml-4 text-white'>Message Box</h3>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row justify-between py-10">
                    <div className="w-full sm:w-[32%] mb-5 sm:mb-0">
                        <div className="flex items-center">
                            <BsFillTelephoneFill className='text-[24px] sm:text-[30px] text-white' />
                            <div className="h-[80px] sm:h-[130px] w-[1px] bg-white mx-4"></div>
                            <div>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>Contact</p>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>02-9836440</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[32%] mb-5 sm:mb-0">
                        <div className="flex items-center">
                            <MdEmail className='text-[24px] sm:text-[30px] text-white' />
                            <div className="h-[80px] sm:h-[130px] w-[1px] bg-white mx-4"></div>
                            <div>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>Email Us</p>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium py-1'>info@bafsd.edu.bd</p>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>infobafsd@gmail.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full sm:w-[32%]">
                        <div className="flex items-center">
                            <FaLocationDot className='text-[24px] sm:text-[30px] text-white' />
                            <div className="h-[80px] sm:h-[130px] w-[1px] bg-white mx-4"></div>
                            <div>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>Address</p>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>MathaBhanga, Mohonpur</p>
                                <p className='text-white text-[20px] sm:text-[25px] font-popins font-medium'>Matlab Uttar, Chandpur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
