import React from 'react';
import Header from '../../Component/Header/Header';
import IntroSection from '../../Component/Home/IntroSection';
import Navber from '../../Component/Navber/Navber';

const Home = () => {
    return (
        <div>
            <Header />
            <Navber />
            <IntroSection />
        </div>
    );
};

export default Home;