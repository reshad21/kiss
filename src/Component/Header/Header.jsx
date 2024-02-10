import React from 'react';
import banner from '../../assets/bannerlogo.png';
const Header = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <img src={banner} alt="" className='md:w-full w-[200px] h-[50px] md:h-[140px] mx-auto' />
        </div>
    );
};

export default Header;