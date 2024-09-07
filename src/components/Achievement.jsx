import React, { useState, useEffect } from 'react';
import Achieve from "../assets/achive.jpg";
import { FaGraduationCap, FaAward, FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

const Achievement = () => {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [countGPA, setCountGPA] = useState(0);
    const [countStudents, setCountStudents] = useState(0);

    useEffect(() => {
        const maxCount1 = 10;
        const maxCount2 = 95; 
        const maxGPA = 100; 
        const maxStudents = 1000; 
        const duration = 2000;

        const step1 = maxCount1 / (duration / 100);
        const step2 = maxCount2 / (duration / 100);
        const stepGPA = maxGPA / (duration / 100);
        const stepStudents = maxStudents / (duration / 100);

        const interval = setInterval(() => {
            setCount1((prevCount) => (prevCount + step1 >= maxCount1 ? maxCount1 : prevCount + step1));
            setCount2((prevCount) => (prevCount + step2 >= maxCount2 ? maxCount2 : prevCount + step2));
            setCountGPA((prevCount) => (prevCount + stepGPA >= maxGPA ? maxGPA : prevCount + stepGPA));
            setCountStudents((prevCount) => (prevCount + stepStudents >= maxStudents ? maxStudents : prevCount + stepStudents));
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='py-[40px] sm:py-[50px] lg:py-[50px] bg-[#01153E]'>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between">
                    <div className="w-full sm:w-[48%] mb-6 sm:mb-0">
                        <h3 className='text-[28px] sm:text-[36px] lg:text-[36px] text-white font-semibold font-popins pb-4 sm:pb-5'>
                            Achievements - Milestone and Statistics
                        </h3>
                        <img src={Achieve} alt="achievement" className='w-full rounded-lg' />
                    </div>
                    <div className="w-full sm:w-[48%]">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="border-2 border-[#FFFF] py-8 px-4 sm:py-10 sm:px-5 hover:scale-105 duration-700 ease-in-out">
                                <div className="flex justify-center">
                                    <FaGraduationCap className='text-white text-[40px] sm:text-[55px] font-bold text-center' />
                                </div>
                                <p className='text-white text-[30px] sm:text-[45px] font-bold text-center border-b-2 border-yellow-200 '>
                                    {Math.floor(count1)}
                                </p>
                                <p className='text-[20px] sm:text-[30px] text-white font-semi-bold font-popins text-center pt-3'>
                                    Last 3 Years Achievements
                                </p>
                            </div>
                            <div className="border-2 border-[#FFFF] py-8 px-4 sm:py-10 sm:px-5 hover:scale-105 duration-700 ease-in-out">
                                <div className="flex justify-center">
                                    <FaAward className='text-white text-[40px] sm:text-[55px] font-bold text-center' />
                                </div>
                                <p className='text-white text-[30px] sm:text-[45px] font-bold text-center border-b-2 border-yellow-200 '>
                                    {Math.floor(count2)}
                                </p>
                                <p className='text-[20px] sm:text-[30px] font-semi-bold text-center text-white pt-3'>
                                    S.S.C Result 2024 Passed (%)
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            <div className="border-2 border-[#FFFF] py-8 px-4 sm:py-10 sm:px-5 hover:scale-105 duration-700 ease-in-out">
                                <div className="flex justify-center">
                                    <FaBuilding className='text-white text-[40px] sm:text-[55px] font-bold text-center' />
                                </div>
                                <p className='text-white text-[30px] sm:text-[45px] font-bold text-center border-b-2 border-yellow-200 '>
                                    {Math.floor(countGPA)}
                                </p>
                                <p className='text-[20px] sm:text-[30px] text-white font-semi-bold font-popins text-center pt-3'>
                                    S.S.C GPA 5
                                </p>
                            </div>
                            <div className="border-2 border-[#FFFF] py-8 px-4 sm:py-10 sm:px-5 hover:scale-105 duration-700 ease-in-out">
                                <div className="flex justify-center">
                                    <IoIosPeople className='text-white text-[40px] sm:text-[55px] font-bold text-center' />
                                </div>
                                <p className='text-white text-[30px] sm:text-[45px] font-bold text-center border-b-2 border-yellow-200 '>
                                    {Math.floor(countStudents)}
                                </p>
                                <p className='text-[20px] sm:text-[30px] font-semi-bold text-white text-center pt-3'>
                                    Students
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievement;
