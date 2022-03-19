import React from 'react';
import integrationbg from '../../assests/INTEGRATIONS.png'
import line from '../../assests/line.png'

const Intregations = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14  '>
                <div className=''>


                    <img className='relative z-50 w-2/3' src={integrationbg} alt="" />


                </div>
                <div className='text-left relative lg:top-10'>
                    <div className='flex items-center justify-start mb-3'>
                        <img className='h-1 w-1/4 mr-3' src={line} alt="" /> <p style={{ color: '#525596' }}>INTEGRATIONS</p>
                    </div>
                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "600", lineHeight: '50px' }} className='lg:text-3xl '>200+ educational tools and platform <span style={{ color: '#F48C06' }}> integrations </span> </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
                        </p>

                    </div>
                    <button style={{ border: '1px solid #F48C06', color: '#F48C06' }} className='w-auto     px-6 py-4 my-6 rounded-full text-center'>See All Integrations</button>
                </div>


            </div>
        </div>
    );
};

export default Intregations;