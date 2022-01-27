import React from 'react';
import Navbar from './Navbar';
import Footer from './footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className='container'>
                <main>
                    {children}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
