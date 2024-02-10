import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Navber = () => {
    const [toggle, setToggle] = useState(false)
    const handleDropDown = (data) => {
        setToggle(data)
    }
    return (
        <div>
            <div className='bg-[#102027] sticky z-40 mx-auto max-w-6xl h-fit'>
                <ul className='flex md:gap-0 justify-between items-center'>
                    <li className='grow'>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Introduction</span>
                    </li>
                    <li className='relative grow'>
                        <span onClick={() => handleDropDown(!toggle)} className='text-center cursor-pointer py-3 px-4 text-base md:text-xl font-normal text-white hover:bg-[#29434e] flex justify-center items-center gap-1'><span>Resources</span> <FaCaretDown /></span>
                        {
                            toggle
                            &&
                            <ul className='absolute top-[50px] left-0 w-full z-50 bg-slate-800 text-white'>
                                <li>
                                    <Link to="#" className='w-full text-center block py-2 border-b-2 border-[#6e6d6d] hover:bg-slate-600'>Options</Link>
                                </li>
                                <li>
                                    <Link to="#" className='w-full text-center block py-2 border-b-2 border-[#6e6d6d] hover:bg-slate-600'>Options</Link>
                                </li>
                                <li>
                                    <Link to="#" className='w-full text-center block py-2 border-b-2 border-[#6e6d6d] hover:bg-slate-600'>Options</Link>
                                </li>
                                <li>
                                    <Link to="#" className='w-full text-center block py-2 border-b-2 border-[#6e6d6d] hover:bg-slate-600'>Options</Link>
                                </li>
                                <li>
                                    <Link to="#" className='w-full text-center block py-2 border-b-2 border-[#6e6d6d] hover:bg-slate-600'>Options</Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className='grow'>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Social</span>
                    </li>
                    <li className='grow'>
                        <span className='text-center cursor-pointer py-3 px-4 block text-base md:text-xl font-normal text-white hover:bg-[#29434e]'>Features</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navber;