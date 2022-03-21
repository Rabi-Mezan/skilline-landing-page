import React, { useEffect, useState } from 'react';
import news1 from '../../assests/news1.png'




const News = () => {

    const [news, setNews] = useState([])


    useEffect(() => {
        fetch('https://mighty-fortress-06090.herokuapp.com/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
    }, [])

    return (
        <div className='container relative my-32 m-auto'>
            <h4 style={{ color: '#2F327D', fontWeight: "600", lineHeight: '50px' }} className='lg:text-2xl text-xl text-center  '>Lastest News and Resources</h4>

            <p style={{ color: '#464646' }} className='lg:w-2/4 m-auto text-md mt-4'>See the developments that have occurred to Skillines in the world
            </p>

            <div>

                <div className='grid lg:grid-cols-2 my-20'>
                    <div className='flex flex-col justify-start  lg:p-10'>
                        <img className='w-full' src={news1} alt="" />
                        <div style={{ backgroundColor: '#F4C467', color: '#252641' }} className='my-5 px-3 py-2 w-28 rounded-full'>News</div>

                        <h6 style={{ color: '#252641' }} className='leading-relaxed text-xl w-full text-left mt-3'>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h6>
                        <p style={{ color: '#696984' }} className='text-left my-3'>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
                        <a className='mr-auto underline' href="/">Read more</a>
                    </div>

                    <div className='w-auto lg:ml-14 '>
                        {
                            news.map(n =>
                                <div>
                                    <div className='relative lg:flex items-start my-10'>
                                        <img className='lg:w-1/3 w-full' src={n.img} alt="" />
                                        <div className=' lg:ml-5 w-auto lg:mt-0 mt-5 '>
                                            <h6 style={{ color: '#252641' }} className='leading-relaxed lg:text-lg w-full text-left '>{n.headline}</h6>
                                            <p style={{ color: '#696984' }} className='text-left my-3'>{n.description}</p></div>
                                        {/* <div style={{ backgroundColor: '#F4C467', color: '#252641' }} className='hidden md:block absolute bottom-10 left-5   px-5 py-2 w-auto rounded-full'>{n.title}</div> */}
                                    </div>



                                </div>)
                        }
                    </div>

                </div>



            </div>
        </div>
    );
};

export default News;