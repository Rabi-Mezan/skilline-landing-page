import React from 'react';
import managebg from '../../assests/managementbg.png'

const Management = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14 '>
                <div className='text-left  relative top-20'>

                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '50px' }} className='lg:text-3xl '>Class Management   <span style={{ color: '#F48C06' }}>Tools for Educators</span> </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Class provides tools to help run and manage the class such as Class Roster, Attendance, and more. With the Gradebook, teachers can review and grade tests and quizzes in real-time.

                        </p>

                    </div>
                </div>
                <div className='relative'>


                    <img className='relative z-50 w-full' src={managebg} alt="" />


                </div>

            </div>
        </div>
    );
};

export default Management;