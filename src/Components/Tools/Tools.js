import React from 'react';
import toolsbg from '../../assests/toolsbg.png'

const Tools = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  lg:w-3/4 p-5 lg:p-0 mx-auto gap-14 '>
                <div className='text-left  relative top-20'>

                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '50px' }} className='lg:text-3xl '>Tools  <span style={{ color: '#F48C06' }}>For Teachers And Learners</span> </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Class has a dynamic set of teaching tools built to be deployed and used during class.
                            Teachers can handout assignments in real-time for students to complete and submit.
                        </p>

                    </div>
                </div>
                <div className='relative top-10 lg:top-0'>


                    <img className='relative z-50 w-full' src={toolsbg} alt="" />


                </div>

            </div>
        </div>
    );
};

export default Tools;