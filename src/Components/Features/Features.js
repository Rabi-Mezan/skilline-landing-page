import React from 'react';
import features from '../../assests/features1.png'
import grid from '../../assests/gridview.png'
import group from '../../assests/group.png'
import presenter from '../../assests/presenters.png'

const Features = () => {
    return (
        <div className='container relative my-28 m-auto'>
            <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '70px' }} className='lg:text-3xl text-center  '>Our <span style={{ color: '#F48C06' }}>Features</span> </h4>

            <p style={{ color: '#464646' }} className='lg:w-2/4 m-auto text-sm mt-4'>This very extraordinary feature, can make learning activities more efficient
            </p>

            <div className='relative grid lg:grid-cols-2 mt-28  justify-center lg:P-0 P-3  w-full mx-auto gap-5 '>
                <div>
                    <img className='w-full' src={features} alt="" />
                </div>
                <div className='text-left p-5'>
                    <h4 style={{ color: '#2F327D', fontWeight: "700", lineHeight: '50px' }} className='lg:text-3xl '>A  <span style={{ color: '#F48C06' }}>user interface </span>designed for the classroom </h4>
                    <div className='my-10'>
                        <div className=' flex items-center justify-between'>
                            <div className='bg-white shadow-md m-auto p-3 rounded-full'>
                                <img className=' ' src={grid} alt="" />
                            </div>
                            <p style={{ color: '#464646' }} className='  text-md ml-8'>Teachers don’t get lost in the grid view and have a dedicated Podium space.
                            </p>
                        </div>
                        <div className=' flex items-center justify-between mt-8'>
                            <div className='bg-white shadow-md m-auto p-3 rounded-full'>
                                <img className=' ' src={presenter} alt="" />
                            </div>
                            <p style={{ color: '#464646' }} className='  text-md ml-8'>TA’s and presenters can be moved to the front of the class and the back.

                            </p>
                        </div>
                        <div className=' flex items-center justify-between mt-8'>
                            <div className='bg-white shadow-md m-auto p-3 rounded-full'>
                                <img className=' ' src={group} alt="" />
                            </div>
                            <p style={{ color: '#464646' }} className='  text-md ml-8'>Teachers can easily see all students and class data at one time very easily.
                            </p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Features;