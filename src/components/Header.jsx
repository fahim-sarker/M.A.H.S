import React from 'react'
import Logo from "../assets/mlogo.png"

const Header = () => {
    return (
        <div>
            <section className='py-5 bg-[#090c9b]'>
                <div className="container mx-auto">
                    <div className="flex gap-5 items-center">
                        <div className="">
                            <img src={Logo} alt="logo" className='h-[200px] w-[200px] rounded-full' />
                        </div>
                        <div className="">
                            <h2 className='text-white text-[36px] font-semibold capitalize font-popins'>matha bhanga adarsha high school</h2>
                            <p className='text-white text-[25px] font-semibold capitalize font-popins'>EIIN. No-107877, School Code-1092, Thana Code-121, Distric code-123</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Header
