import React from 'react';
import instructor from '../../assests/students.png'

const About = () => {
    return (
        <div className='container relative my-28 m-auto'>
            <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '70px' }} className='lg:text-3xl text-center  '>What is
                <span style={{ color: '#F48C06' }}> Skilline?</span> </h4>

            <p style={{ color: '#464646' }} className='lg:w-3/4 m-auto text-sm font-normal leading-relaxed mt-4'>Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
            </p>

            <div className=' grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-8 '>
                <div className='relative w-full'>
                    <img className=' z-0' src={instructor} alt="" />
                    <div className='absolute top-20 left-20'>
                        <h3 className='text-2xl text-white font-semibold'>FOR INSTRUCTORS</h3>
                        <button className='w-auto  text-white bg-transparent  border-2 border-white px-5 py-4 my-3 rounded-full text-center'>Start a class today</button>
                    </div>

                </div>
                <div className='relative'>
                    <img className='  z-0' src={instructor} alt="" />
                    <div className='absolute top-20 left-20'>
                        <h3 className='text-2xl text-white font-semibold'>FOR STUDENTS</h3>
                        <button style={{ backgroundColor: '#23BDEEE5' }} className='w-auto  text-white    px-5 py-4 my-3 rounded-full text-center'>Enter access code</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;