import React from 'react';
import heroImage from '../../assests/heroImage.png'

const Hero = () => {
    return (
        <div style={{ backgroundColor: '#FFF2E1' }}>
            <div className="grid grid-cols-2  ">
                <div className='text-left'>
                    <h1 style={{ fontSize: '54px', color: '#2F327D', lineHeight: "81px", marginBottom: '34px' }} className=' font-extrabold absolute top-60 left-10 '><span style={{ color: '#F48C06' }}>Studying</span> Online is now <br /> much easier</h1>
                    <p className='absolute top-96 left-10 text-xl' >Skilline is an interesting platform that will teach <br /> you in more an interactive way</p>
                    <div>
                        <button>Join Fo Free</button>
                        <button>Watch how it works</button>
                    </div>
                </div>
                <div>
                    <img style={{ width: '544px', height: '890px' }} src={heroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;