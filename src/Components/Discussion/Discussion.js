import React from 'react';
import discussion from '../../assests/discussionbg.png'

const Discussion = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14  '>
                <div className=''>
                    <img className='relative z-50 w-full' src={discussion} alt="" />
                </div>
                <div className='text-left relative lg:top-20'>
                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '50px' }} className='lg:text-3xl '>One-on-One   <span style={{ color: '#F48C06' }}> Discussions </span></h4>
                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Teachers and teacher assistants can talk with students privately without leaving the Zoom environment.
                        </p>
                    </div>
                </div>
            </div>

            <button style={{ border: '1px solid #F48C06', color: '#F48C06' }} className='w-auto     px-6 py-4 my-6 rounded-full text-center'>See more features</button>
        </div>
    );
};

export default Discussion;