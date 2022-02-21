import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    const [displayChildren, setDisplayChildren] = useState(children);
    const [transitionStage, setTransitionStage] = useState("fadeOut");
    useEffect(() => {
        setTransitionStage("fadeIn");
    }, []);

    useEffect(() => {
        if (children !== displayChildren)
            setTransitionStage("fadeOut");
    }, [children, displayChildren]);

    return (
        <>
            <Navbar />
            <div className='container'>
                <main
                    onTransitionEnd={() => {
                        if (transitionStage === "fadeOut") {
                          setDisplayChildren(children);
                          setTransitionStage("fadeIn");
                        }
                      }}
                      className={`content ${transitionStage}`}
                >
                    {displayChildren}
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;