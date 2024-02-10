import React, { createContext, useContext, useRef, useState } from 'react';

const NAVBER_CONTEXT = createContext();

const NavberProvider = ({ children }) => {
    const [activeLink, setActiveLink] = useState(0);


    const Introduction = useRef()
    const goSynth = useRef()
    const Features = useRef()
    const Resources = useRef()
    const Revolution = useRef()

    const scrollHandler = (eleRef, index) => {
        console.log(eleRef.current, typeof (index));
        if (eleRef && eleRef.current) {
            const offsetTop = eleRef.current.offsetTop - 47; // Maintain a fixed 60px gap from top
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setActiveLink(index);
        }
    }

    const value = { activeLink, setActiveLink, scrollHandler, Introduction, goSynth, Features, Resources, Revolution };

    return (
        <NAVBER_CONTEXT.Provider value={value}>
            {children}
        </NAVBER_CONTEXT.Provider>
    );
};

export const useSmoothNavber = () => {
    const context = useContext(NAVBER_CONTEXT);
    return context;
};

export default NavberProvider;