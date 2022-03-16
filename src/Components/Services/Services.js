import React from 'react';
import billing from '../../assests/billing.png'
import calender from '../../assests/calendar.png'
import users from '../../assests/users.png'

const Services = () => {
    return (
        <div className='container relative my-28 m-auto'>
            <h4 style={{ color: '#2F327D', fontWeight: "800", lineHeight: '70px' }} className='lg:text-3xl text-center  '>All-In-One <span style={{ color: '#F48C06' }}>Cloud Software</span> </h4>

            <p style={{ color: '#464646' }} className='lg:w-2/4 m-auto text-sm mt-4'>Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
            </p>

            <div className='grid lg:grid-cols-3 mt-40 items-center m-auto w- gap-16'>
                <div className='flex flex-col justify-center items-center shadow-md  rounded-lg py-8  lg:h-96'>
                    <div className='relative -top-12 p-3 rounded-full   shadow-md' style={{ backgroundColor: '#5B72EE' }} >
                        <img className='w-14 h-14 p-2' src={billing} alt="" />
                    </div>
                    <h5 style={{ color: '#2F327D' }} className='text-xl font-medium mt-6  mb-5'>
                        Online Billing, <br /> Invoicing, & Contracts
                    </h5>
                    <p className='font-base text-sm w-3/4' style={{ color: '#696984' }}>Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts</p>
                </div>
                <div className='flex flex-col justify-center items-center shadow-md  rounded-lg py-8 lg:h-96'>
                    <div className='relative -top-14 p-3 rounded-full   shadow-md' style={{ backgroundColor: '#F48C06' }} >
                        <img className='w-14 h-14 p-2' src={calender} alt="" />
                    </div>
                    <h5 style={{ color: '#2F327D' }} className='text-xl font-medium mt-6  mb-5'>
                        Easy Scheduling & <br /> Attendance Tracking
                    </h5>
                    <p className='font-base text-sm w-3/4' style={{ color: '#696984' }}>Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance</p>
                </div>
                <div className='flex flex-col justify-center items-center shadow-md  rounded-lg py-8 lg:h-96'>
                    <div className='relative -top-20 p-3 rounded-full   shadow-md z-50' style={{ backgroundColor: '#29B9E7' }} >
                        <img className='w-14 h-14 p-2' src={billing} alt="" />
                    </div>
                    <h5 style={{ color: '#2F327D' }} className='text-xl font-medium mt-6  mb-5'>
                        Customer Tracking
                    </h5>
                    <p className='font-base text-sm w-3/4' style={{ color: '#696984' }}>Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization </p>
                </div>

            </div>

        </div>
    );
};

export default Services;