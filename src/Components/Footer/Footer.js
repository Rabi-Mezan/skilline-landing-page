import React from 'react';
import logo from '../../assests/logotrans.png'

const Footer = () => {
    return (
        <div style={{ backgroundColor: '#252641' }} className='flex flex-col items-center  justify-center py-20'>
            <div className='flex  justify-center w-2/4'>
                <img className='mr-5' src={logo} alt="" />
                <p className='text-white text-lg text-left font-semibold border-l-2 px-5'>Virtual Class  for Zoom</p>
            </div>

            <div className='my-16'>
                <h5 className='text-lg' style={{ color: '#B2B3CF' }}>Subscribe to get our Newsletter</h5>
                <div className='mt-5 flex justify-between'>
                    <input className='bg-transparent px-5 py-2 border-2 rounded-full w-full' placeholder='Your Mail ' type="text" />
                    <button style={{ backgroundColor: '#545AE8' }} className='px-5 py-3 text-white rounded-full ml-5'>Subscribe</button>
                </div>
            </div>

            <div style={{ color: '#B2B3CF' }} className='mt-10'>
                <a className='mx-3' href="/">Careers</a>
                |
                <a className='mx-3' href="/">Privacy Policy</a>
                |
                <a className='mx-3' href="/">Terms & Conditions</a>
                <br />
                <small className='text-md'>© 2021 Class Technologies Inc. </small>
            </div>




        </div>
    );
};

export default Footer;