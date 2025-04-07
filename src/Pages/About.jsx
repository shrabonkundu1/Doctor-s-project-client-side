import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-16 w-[95%] md:w-[70%] mx-auto py-10 md:py-36 '>
            <div className='w-[110%] space-y-8'>
                <h2 className='text-6xl font-semibold font-poppins '>Who We Are</h2>
                <p className='leading-7 '>Welcome to Master Dental Surgery, where we go beyond traditional dental care to redefine smiles with cutting-edge technology and expertise.
<br />
Our journey started almost three decade ago as a pioneering dental surgery center, dedicated to providing advanced surgical solutions and prosthetic care. With a team of skilled professionals, we are committed to excellence in dental health and aesthetics.
<br /> 
With years of experience, we continuously refine our techniques and materials to align with international standards, including the stringent USA FDA regulations, ensuring the highest quality care for our patients.</p>
            <Link><button className=' bg-gradient-to-r from-blue-600 mt-5 to-blue-200 px-10 py-3 rounded-full text-white cursor-pointer'>Learn more</button></Link>
            </div>
            <div className='w-full'>
                <img className='w-[430px]  h-[430px]  border-4 border-purple-800 rounded-tr-[140px]  rounded-bl-[140px]' src="https://i.ibb.co.com/3YjFNYPM/Chat-GPT-Image-Mar-28-2025-04-17-26-PM.png" alt="" />
            </div>
            
        </div>
    );
};

export default About;