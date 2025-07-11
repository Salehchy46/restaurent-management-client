import React from 'react';
import { motion } from "motion/react"

const Banner = () => {
    return (
        <div
            className="hero min-h-[500px] my-8 lg:p-20 p-10 text-center"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/nMHkZp1Z/The-Lighthouse-Restaurant-Nakheel-Mall-3-2341e60b-b61c-4f27-9969-a1255dce0f6b.webp)",
            }}
        >
            <div className="hero-overlay" style={{}}></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <div className='flex items-center'>
                        <motion.img src="https://i.ibb.co/8gv8ZYHH/download-2.png" animate={{rotate: 360}} transition={{repeat: Infinity}} alt="" className='lg:w-20 lg:block hidden' />
                        <h1 className="mb-5 lg:text-5xl text-2xl font-bold">You're Welcome</h1>
                        <motion.img src="https://i.ibb.co/8gv8ZYHH/download-2.png" animate={{rotate: 360}} transition={{repeat: Infinity}} alt="" className='lg:w-20 lg:block hidden' />
                    </div>
                    <p className="mb-5">
                        Smart Management. Smoother Service. Satisfied Customers.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;