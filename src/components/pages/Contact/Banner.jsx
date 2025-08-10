import React, { useEffect } from 'react';
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
                className="hero min-h-96 my-10 rounded-2xl"
                style={{
                    backgroundImage:
                        "url(https://www.netlabindia.com/wp-content/uploads/2018/06/contact-us-banner.jpg)",
                }}
            >
            </div>
        </div>
    );
};

export default Banner;