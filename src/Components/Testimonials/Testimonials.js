import React from 'react';
import testimonials from '../../assests/TESTIMONIALbg.png'
import line from '../../assests/line.png'
import stars from '../../assests/stars.png'

const Testimonials = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14  '>

                <div className='text-left relative lg:top-10'>
                    <div className='flex items-center justify-start mb-3'>
                        <img className='h-1 w-1/4 mr-3' src={line} alt="" /> <p style={{ color: '#525596' }}>TESTIMONIAL</p>
                    </div>
                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "600", lineHeight: '50px' }} className='lg:text-3xl '>What They Say? </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Schoology has every tool your classroom needs and comes pre-integrated with more than 200+ tools, student information systems (SIS), and education platforms.
                        </p>

                    </div>
                    <button style={{ border: '1px solid #F48C06', color: '#F48C06' }} className='w-auto     px-6 py-4 my-6 rounded-full text-center'>Write your assessment</button>
                </div>
                <div className=''>


                    <img className='relative z-0 lg:w-3/4' src={testimonials} alt="" />
                    <div style={{ borderLeft: '15px solid #F67766', color: '#5F5F7E' }} className=' relative lg:-mt-32 lg:-mr-10 bg-white z-50  ml-20 px-5 pt-8  rounded-md shadow-md lg:h-1/2 '>
                        <p className='px-5 py-3 text-left border-l-2 text-md'>"Thank you so much for your help. It's exactly what I've been looking for. You won't regret it. It really saves me time and effort. Skilline is exactly what our business has been lacking."</p>
                        <div className='flex justify-between mt-6'>
                            <h6 className='text-lg font-medium'>Gloria Rose</h6>
                            <div>
                                <img className='' src={stars} alt="" />
                                <small className=''>12 reviews at Yelp</small>

                            </div>

                        </div>
                    </div>


                </div>



            </div>
        </div>
    );
};

export default Testimonials;