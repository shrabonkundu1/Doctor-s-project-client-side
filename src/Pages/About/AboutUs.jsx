import React from 'react';
import About from '../About';
import OurDoctors from './OurDoctors';

const AboutUs = () => {
    return (
        <div>
            <div className='banner'>
                <div>
                <img className='h-[600px] w-full object-cover ' src="https://i.ibb.co.com/7JkhZN6t/FB-IMG-1743885449167.jpg" alt="" />
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <About></About>
            </div>
            <div>
                <OurDoctors></OurDoctors>
            </div>
        </div>
    );
};

export default AboutUs;