import React from 'react';
import heroImage from '../../assests/heroImage.png'
import playbtn from '../../assests/playbtn.png'
import Navbar from '../Navbar/Navbar';
import calender from '../../assests/calendar.png'

const Hero = () => {
    return (
        <div className='container-fluid' style={{ backgroundColor: '#FFF2E1', clipPath: "ellipse(100% 100% at 55.12% 0%)" }}>
            <Navbar></Navbar>
            <div className="grid grid-cols-2 rounded-b-lg relative  gap-3">
                <div className='text-left relative top-1/4 left-20 px-2'>
                    <h5 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '45px' }} className='lg:text-4xl   '><span style={{ color: '#F48C06' }}>Studying</span> Online is now <br /> much easier</h5>
                    <p style={{ color: '#464646' }} className=' text-md mt-5 my-10 ' >Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                    <div className='  flex items-center left-28 '>
                        <button style={{ backgroundColor: '#F48C06' }} class="border-0 py-1 px-3 focus:outline-none rounded-full text-base mt-4 md:mt-0 w-40 h-12 text-center font-semibold text-white">Join For Free
                        </button>
                        <div className='ml-10 flex items-center'>
                            <img style={{ width: '50px', height: '48px' }} className='' src={playbtn} alt="" />
                            <p style={{ color: '#252641' }} className='ml-4 text-xl '>Watch how it works</p>
                        </div>


                    </div>
                </div>
                <div className=' left-1/2 z-0'>
                    <img className='w-4/5 drop-shadow-sm' src={heroImage} alt="" />

                    <div className='absolute z-10 bg-white'>
                        <img className='w-1/2' src={calender} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;