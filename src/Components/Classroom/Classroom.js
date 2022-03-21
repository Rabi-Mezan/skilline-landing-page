import React from 'react';
import classroom from '../../assests/classroom.png'
import rectblue from '../../assests/rectblue.png'
import rectOrange from '../../assests/rectorange.png'
import circle from '../../assests/circle.png'

const Classroom = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14 '>
                <div className='text-left '>
                    <img className='absolute z-0 w-12 -top-2 -left-3' src={circle} alt="" />
                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "500", lineHeight: '50px' }} className='lg:text-2xl '>Everything you can do in a physical classroom,  <span style={{ color: '#F48C06' }}>you can do with Skilline</span> </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
                        </p>
                        <a href="/">Learn more</a>
                    </div>
                </div>
                <div className='relative'>
                    <img className='absolute z-0 -mt-5 -ml-5' src={rectblue} alt="" />

                    <img className='relative z-50 w-full' src={classroom} alt="" />
                    <img className='absolute z-0 -bottom-2 -right-2 w-1/4' src={rectOrange} alt="" />

                </div>

            </div>
        </div>
    );
};

export default Classroom;