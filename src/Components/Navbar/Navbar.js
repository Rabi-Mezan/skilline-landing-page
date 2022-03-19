import React from 'react';
import logo from '../../assests/logo.png'

const Navbar = () => {
    return (
        <div >
            <div class="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center">
                <a href='/' class="flex   text-sm items-center  mb-4 md:mb-0">
                    <img className='w-24 h-18' src={logo} alt="" />
                </a>
                <nav style={{ color: "#252641" }} class="md:ml-auto flex flex-wrap items-center text-base font-md justify-center ">
                    <a href='/' class="mr-10 ">Home</a>
                    <a href='/' class="mr-10 ">Careers</a>
                    <a href='/' class="mr-10 ">Blog</a>
                    <a href='/' class="mr-10 ">About Us</a>
                </nav>
                <button class="border-0 py-1 px-3 focus:outline-none bg-white rounded-3xl text-base mt-4 md:mt-0 lg:mr-5 w-28 h-10 text-center ">Login
                </button>
                <button style={{ backgroundColor: '#F48C06' }} class="border-0 py-1 px-3 focus:outline-none rounded-3xl text-base mt-4 md:mt-0 w-28 h-10 text-center text-white">Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;