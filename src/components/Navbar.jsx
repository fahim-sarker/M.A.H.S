import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaFacebook,FaTwitter,FaLinkedin,FaYoutube   } from "react-icons/fa";




const Navbar = () => {
  return (
    <section className='py-5 bg-[navy]'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-[70%]">
                    <ul className='flex gap-x-14 items-center font-semibold cursor-pointer'>
                        <li className="text-[20px] font-popins capitalize text-white "> home</li>
                        <li className="text-[20px] font-popins capitalize text-white  flex items-center gap-x-2">institute info <MdKeyboardArrowDown className='font-bold text-[25px]'/></li>
                        <li className="text-[20px] font-popins capitalize text-white  flex items-center gap-x-2">academic info <MdKeyboardArrowDown className='font-bold text-[25px]'/></li>
                        <li className="text-[20px] font-popins capitalize text-white  flex items-center gap-x-2">gallery <MdKeyboardArrowDown className='font-bold text-[25px]'/></li>
                        <li className="text-[20px] font-popins capitalize text-white  flex items-center gap-x-2">more <MdKeyboardArrowDown className='font-bold text-[25px]'/></li>
                        <li className="text-[20px] font-popins capitalize text-white ">contact us</li>
                    </ul>
                </div>
                <div className="w-[25%]">
                    <div className="flex gap-x-10 justify-end cursor-pointer">
                        <div className="bg-[#01153E] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                            <FaFacebook className='font-bold text-[25px] text-white'/>
                        </div>
                        <div className="bg-[#82CAff] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                            <FaTwitter className='font-bold text-[25px] text-white'/>
                        </div>
                        <div className="bg-[#82CAff] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                            <FaLinkedin className='font-bold text-[25px] text-white'/>
                        </div>
                        <div className="bg-[#B32624] h-[50px] w-[50px] rounded-full flex items-center justify-center">
                            <FaYoutube className='font-bold text-[25px] text-white'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Navbar
