import React from 'react';

const Headline = () => {
    return (
        <div className='bg-[#01153E] lg:py-3'>
            <div className="container mx-auto">
                <div className="flex flex-wrap items-center">
                    <div className="bg-[#0096C7] text-center w-full sm:w-[30%] md:w-[20%] py-2">
                        <h3 className="text-[18px] sm:text-[24px] md:text-[30px] font-popins capitalize text-white">
                            Latest News
                        </h3>
                    </div>
                    <div className="w-full sm:w-[70%] md:w-[80%] overflow-hidden">
                        <marquee>
                            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-popins capitalize text-white hover:text-yellow-200 duration-300 ease-in-out pr-6">
                                03 September 2024
                            </span>
                            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-popins capitalize text-white hover:text-yellow-200 duration-300 ease-in-out pr-6">
                                মাথাভাঙ্গা আদর্শ উচ্চ বিদ্যালয় !
                            </span>
                            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-popins capitalize text-white hover:text-yellow-200 duration-300 ease-in-out pr-6">
                                ৪ সেপ্টেম্বর ঐচ্ছিক ছুটি সম্পর্কিত অফিস আদেশ
                            </span>
                            <span className="text-[16px] sm:text-[18px] md:text-[20px] font-popins capitalize text-white hover:text-yellow-200 duration-300 ease-in-out">
                                ৪ সেপ্টেম্বর ঐচ্ছিক ছুটি সম্পর্কিত অফিস আদেশ
                            </span>
                        </marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Headline;
