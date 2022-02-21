import React from 'react';
import Navbar from './navbar';
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