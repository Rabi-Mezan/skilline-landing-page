import React from 'react';
import logo from '../../assests/logotrans.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#252641' }} className='flex flex-row  justify-center py-20'>
            <div className='flex  justify-between w-1/4'>
                <img src={logo} alt="" />

                <p className='text-white text-lg text-left font-semibold border-l-2 px-5'>Virtual Class <br /> for Zoom</p>
            </div>




        </div>
    );
};

export default Footer;