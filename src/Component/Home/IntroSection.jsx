import React from 'react';
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const IntroSection = () => {
    return (
        <div className='mx-auto max-w-6xl'>
            <div className='flex flex-col md:flex-row gap-6 w-full'>
                <div className="w-full md:w-[80%]">
                    <h2 className='font-russo text-2xl text-center'>SYNOPSIS</h2>
                    <p className='font-russo px-3 md:px-0 text-justify'>Orbiting the colony of Keria V, an agricultural and light industry world lies two moons. Ciar, mostly ice that provides the majority of the fuel and water supply to it’s sister moon. Koishuma, the home moon of Kocore Industrial Sentient Systems, or KISS for short. A modestly sized corporation that focuses on more intelligent automation systems. With Keria V as their testbed for many of the new products the company sits comfortably contracting specialized units for worlds on the frontier. <br /><br />

                        Their latest series, combining the latest in AI systems, and synthetic materials, forging a new form of synthetics. Taking the artistic form of an old mythical creature called a Kobold. This choice was to create something that is not human like, but still has enough human-like features to be functional in everyday environments. Second, these smaller frame synths keep the costs lower than larger more industrial heavy units. These smaller, lightweight, and quick adapting synthetics are starting to leave the prototype phase. Entering a beta form before release, a few thousand of these synths have been created all to work in the Keria System, before being put into full commercial production. <br /><br />

                        While most of the design is for space borne operations, or tight corridors such as in star ships, these Synthbolds (Kobots), are being trialed in many other workforces to test their efficacy. From the open fields on the agri farms, to the mining tunnels of Koshiuma itself. Along with civil jobs, such as shopkeepers, house servants, and safety inspectors, to run the AIs algorithms to test if a majority develop natural and positive personalities.</p>
                </div>
                <div className="w-full md:w-[20%] border-2">
                    <ul className='flex flex-col justify-around items-center gap-3 md:gap-0 h-full border-4 border-slate-900'>
                        <li><span className='text-2xl font-russo'>CONNECT</span></li>
                        <li><Link to="#" className='block bg-rose-800 rounded-full p-8'><FaDiscord size={60} /></Link></li>
                        <li><Link to="#" className='block bg-rose-800 rounded-full p-8'><FaTelegramPlane size={60} /></Link></li>
                        <li><Link to="#" className='block bg-rose-800 rounded-full p-8'><FaTwitter size={60} /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default IntroSection;