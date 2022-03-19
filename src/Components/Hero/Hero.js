import React from 'react';
import playbtn from '../../assests/playbtn.png'
import Navbar from '../Navbar/Navbar';
import headerpic from '../../assests/header-pic.png'

const Hero = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#FFF2E1', clipPath: "ellipse(100% 100% at 55.12% 0%)" }}>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-2 rounded-b-lg relative  gap-3">
                <div className='text-left relative top-1/4 lg:left-20 px-2'>
                    <h5 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '45px' }} className='lg:text-4xl text-3xl   '><span style={{ color: '#F48C06' }}>Studying</span> Online is now <br /> much easier</h5>
                    <p style={{ color: '#464646' }} className=' text-md mt-5 my-10 ' >Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                    <div className=' flex items-center  lg:left-28 '>
                        <button style={{ backgroundColor: '#F48C06' }} class="border-0 py-1 px-3 focus:outline-none rounded-full lg:text-base text-xs mt-4 md:mt-0 lg:w-40 w-32 h-12 text-center lg:font-semibold text-white">Join For Free
                        </button>
                        <div className='ml-10 flex items-center mt-4 lg:mt-0'>
                            <img style={{ width: '50px', height: '48px' }} className='' src={playbtn} alt="" />
                            <p style={{ color: '#252641' }} className='ml-4 lg:text-xl text-sm '>Watch how it works</p>
                        </div>


                    </div>
                </div>
                <div className=' lg:left-1/2 z-0 lg:mt-0 mt-10'>
                    <img className='w-4/5 drop-shadow-sm' src={headerpic} alt="" />


                </div>
            </div>
        </div>
    );
};

export default Hero;