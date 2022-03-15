import React from 'react';
import logo from '../../assests/logo.png'

const Navbar = () => {
    return (
        <div >
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a href='/' class="flex title-font font-base items-center text-gray-900 mb-4 md:mb-0">
                    <img className='w-30 h-20' src={logo} alt="" />
                </a>
                <nav style={{ color: "#252641" }} class="md:ml-auto flex flex-wrap items-center text-base font-medium justify-center">
                    <a href='/' class="mr-20 ">Home</a>
                    <a href='/' class="mr-20 ">Careers</a>
                    <a href='/' class="mr-20 ">Blog</a>
                    <a href='/' class="mr-20 ">About Us</a>
                </nav>
                <button class="border-0 py-1 px-3 focus:outline-none bg-white rounded-3xl text-base mt-4 md:mt-0 mr-8 w-28 h-10 text-center ">Login
                </button>
                <button style={{ backgroundColor: '#F48C06' }} class="border-0 py-1 px-3 focus:outline-none rounded-3xl text-base mt-4 md:mt-0 w-28 h-10 text-center text-white">Sign Up
                </button>
            </div>
        </div>
    );
};

export default Navbar;