import React, { useEffect, useState } from 'react';




const News = () => {

    const [news, setNews] = useState([])


    useEffect(() => {
        fetch('http://localhost:5000/news')
            .then(res => res.json())
            .then(data => {
                setNews(data);
            })
    }, [])

    return (
        <div className='container relative my-32 m-auto'>
            <h4 style={{ color: '#2F327D', fontWeight: "600", lineHeight: '50px' }} className='lg:text-2xl text-center  '>Lastest News and Resources</h4>

            <p style={{ color: '#464646' }} className='lg:w-2/4 m-auto text-md mt-4'>See the developments that have occurred to Skillines in the world
            </p>

            <div>

                <div className='grid lg:grid-cols-2'>


                </div>


            </div>
        </div>
    );
};

export default News;