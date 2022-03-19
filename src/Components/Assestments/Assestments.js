import React from 'react';
import assestmentsbg from '../../assests/assestmentsbg.png'

const Assestments = () => {
    return (
        <div className='container-fluid my-40  mx-auto'>
            <div className='relative grid lg:grid-cols-2 mt-28  justify-center  w-3/4 mx-auto gap-14  '>
                <div className=''>


                    <img className='relative z-50 w-full' src={assestmentsbg} alt="" />


                </div>
                <div className='text-left relative lg:top-20'>
                    <div className=' w-full relative z-50'>
                        <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '50px' }} className='lg:text-3xl '>Assessments,   <span style={{ color: '#F48C06' }}> Quizzes,</span>Tests </h4>

                        <p style={{ color: '#464646' }} className='text-left m-auto text-md my-5'>Easily launch live assignments, quizzes, and tests.
                            Student results are automatically entered in the online gradebook.
                        </p>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Assestments;