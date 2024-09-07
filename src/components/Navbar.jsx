import React, { useState, useEffect, useRef } from 'react';
import Logo from "../assets/mlogo.png";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsFacebook } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
    const [dropdown, setDropdown] = useState({
        about: false,
        information: false,
        gallery: false,
        regulations: false,
        notice: false,
    });

    const navbarRef = useRef(null);
    const handleDropdown = (menu) => {
        setDropdown(prev => ({
            about: false,
            information: false,
            gallery: false,
            regulations: false,
            notice: false,
            [menu]: !prev[menu],  // Toggle the current dropdown
        }));
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setDropdown({
                about: false,
                information: false,
                gallery: false,
                regulations: false,
                notice: false,
            });
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const closeDropdown = () => {
        setDropdown({
            about: false,
            information: false,
            gallery: false,
            regulations: false,
            notice: false,
        });
    };

    return (
        <>
            <section className="py-5 bg-[#FFFFFF]">
                <div className="container mx-auto" ref={navbarRef}>
                    <div className="flex justify-between items-center">
                        <div className="w-[10%]">
                            <img src={Logo} alt="logo" className="w-[150px] h-[150px] rounded-full" />
                        </div>
                        <div className="w-[65%]">
                            <div className="flex gap-x-4 items-center border-b border-[#000]">
                                <h2 className="text-[36px] font-popins text-[#0096C7] font-bold pl-2">
                                    MathaBhanga Adrasha High School
                                </h2>
                                <p className="text-[16px] font-popins text-[#000] font-bold pt-4">
                                    শিক্ষা-সংযম-শৃঙ্খলা | EIIN-103890
                                </p>
                            </div>
                            <ul className="flex gap-x-8 pt-3 cursor-pointer">
                                <li className="items-center text-[18px] font-popins font-semibold capitalize">
                                    home
                                </li>
                                <li className="relative">
                                    <div className="flex gap-x-1 items-center text-[18px] font-popins font-semibold capitalize"
                                        onClick={() => handleDropdown('about')}>
                                        about us <TiArrowSortedDown />
                                    </div>
                                    {dropdown.about && (
                                        <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-md border border-gray-200 z-10">
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Our History</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Mission & Vision</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Staff</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="relative">
                                    <div className="flex gap-x-1 items-center text-[18px] font-popins font-semibold capitalize"
                                        onClick={() => handleDropdown('information')}>
                                        information <TiArrowSortedDown />
                                    </div>
                                    {dropdown.information && (
                                        <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-md border border-gray-200 z-10">
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Admission</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Examinations</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Results</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="relative">
                                    <div className="flex gap-x-1 items-center text-[18px] font-popins font-semibold capitalize"
                                        onClick={() => handleDropdown('gallery')}>
                                        gallery <TiArrowSortedDown />
                                    </div>
                                    {dropdown.gallery && (
                                        <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-md border border-gray-200 z-10">
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Photo Gallery</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Video Gallery</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="relative">
                                    <div className="flex gap-x-1 items-center text-[18px] font-popins font-semibold capitalize"
                                        onClick={() => handleDropdown('notice')}>
                                        notice <TiArrowSortedDown />
                                    </div>
                                    {dropdown.notice && (
                                        <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-md border border-gray-200 z-10">
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Latest Notices</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Event Notices</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Holiday Notices</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="relative">
                                    <div className="flex gap-x-1 items-center text-[18px] font-popins font-semibold capitalize"
                                        onClick={() => handleDropdown('regulations')}>
                                        regulations <TiArrowSortedDown />
                                    </div>
                                    {dropdown.regulations && (
                                        <ul className="absolute left-0 mt-2 w-[200px] bg-white shadow-md border border-gray-200 z-10">
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Code of Conduct</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>Dress Code</li>
                                            <li className="px-4 py-2 hover:bg-gray-100 text-[18px] font-popins font-semibold capitalize" onClick={closeDropdown}>School Policies</li>
                                        </ul>
                                    )}
                                </li>
                                <li className="text-[18px] font-popins font-semibold capitalize">
                                    contact
                                </li>
                            </ul>
                        </div>
                        <div className="w-[25%] justify-end">
                            <div className="flex justify-end items-center gap-x-10">
                                <BsFacebook className="text-[36px] font-popins text-[#0096C7]" />
                                <p className="flex gap-2 items-center bg-[#0096C7] h-[50px] w-[120px] rounded-full text-[20px] font-popins text-white justify-center capitalize hover:bg-[#FFFF] hover:text-black duration-300 ease-in-out hover:border-2 hover:border-[#000]">
                                    <FaUser /> login
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;
