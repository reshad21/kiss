import React from 'react';
import { BsCheckLg } from "react-icons/bs";
import { IoIosClose } from "react-icons/io";
import './FeatureTable.css';
const FeatureTable = () => {
    return (
        <div className='py-5'>
            <table className='w-full'>
                <tr>
                    <th></th>
                    <th>Organic</th>
                    <th>Synth</th>
                </tr>
                <tr>
                    <td>Soft exterior</td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Durable endoskeleton</td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Boopable snoot</td>
                    <td>
                        <div className="flex items-center justify-center">Maybe</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Fully customisable body plan</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Modular design</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Personal nanite swarm</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Multispectral imaging support</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Pneumatic muscles</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Status LEDs</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Expressive facial visor</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Open source</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
                <tr>
                    <td>Documented</td>
                    <td>
                        <div className="flex items-center justify-center"><IoIosClose size={40} className='text-red-500' />No</div>
                    </td>
                    <td>
                        <div className="flex items-center justify-center"><BsCheckLg size={29} className='text-green-500' />Yes</div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default FeatureTable;