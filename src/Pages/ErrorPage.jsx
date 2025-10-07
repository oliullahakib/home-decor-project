import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {

    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <div className='flex-1'>
            <h1 className='text-5xl'> 404 Page Not Found !</h1>
            </div>
            <Footer/>
        </div>
    );
};

export default ErrorPage;