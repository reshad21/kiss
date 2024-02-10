import React from 'react';

const Navber = () => {
    return (
        <div>
            <div className='bg-[#102027] sticky top-0 left-0 bottom-0 right-0 z-40 clear-both'>
                <ul className='flex md:gap-0 justify-between items-center mx-auto max-w-7xl overflow-x-auto'>
                    <li className=''>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</span>
                    </li>
                    <li className=''>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>KobotEducation</span>
                    </li>
                    <li className=''>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Features</span>
                    </li>
                    <li className=''>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Resources</span>
                    </li>
                    <li className=''>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white bg-[#005cb2]'>Social</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;