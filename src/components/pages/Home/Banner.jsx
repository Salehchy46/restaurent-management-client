import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div data-aos='fade-up'>
            <div
                className="hero min-h-[500px] my-8 lg:p-20 p-10 text-center rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/N6K2gPhk/Chat-GPT-Image-Jul-16-2025-02-14-49-AM.png)",
                }}
            >
            </div>
        </div>
    );
};

export default Banner;