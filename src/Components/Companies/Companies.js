import React from 'react';
import airbnb from '../../assests/airbnb.png'
import netflix from '../../assests/netflix.png'
import facebook from '../../assests/facebook.png'
import grab from '../../assests/grab-logo.png'
import amazon from '../../assests/amazon.png'
import google from '../../assests/google.png'
import companies from '../../assests/companies.png'


const Companies = () => {
    return (
        <div className='my-20'>

            <p style={{ color: '#696984' }} className='text-xl'>Trusted by 5,000+ Companies Worldwide</p>

            <div className='lg:flex lg:justify-between justify-center lg:items-start items-center mt-12 lg:w-3/4 mx-auto'>
                {/* <img className='w-32' src={google} alt="" />
                <img className='w-32 lg:mt-2' src={netflix} alt="" />
                <img className='w-32' src={airbnb} alt="" />
                <img className='w-28 lg:mt-3' src={amazon} alt="" />
                <img className='w-32 lg:mt-2' src={facebook} alt="" />
                <img className='w-24' src={grab} alt="" /> */}
                <img src={companies} alt="" />
            </div>
        </div>
    );
};

export default Companies;