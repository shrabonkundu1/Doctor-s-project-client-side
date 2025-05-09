import React from 'react';
import Navbar from '../../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../../Shared/Footer';

const Mainlayout = () => {
    return (
        <div className='min-h-screen'>
            <div className='mb-16'>
            <Navbar></Navbar>
            </div>
            <div>
            <Outlet></Outlet>
            </div>
          <div className='mt-72'>
          <Footer></Footer>
          </div>
        </div>
    );
};

export default Mainlayout;