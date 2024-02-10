import React from 'react';
import Header from '../../Component/Header/Header';
import FeatureComparison from '../../Component/Home/FeatureSection/FeatureComparison';
import IntroSection from '../../Component/Home/IntroSection';
import Navber from '../../Component/Navber/Navber';

const Home = () => {
    return (
        <div>
            <Header />
            <Navber />
            <IntroSection />
            <FeatureComparison />
        </div>
    );
};

export default Home;