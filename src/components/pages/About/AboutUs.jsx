import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000,
            once: true,
        })
    }, [])
    return (
        <div 
            className="card px-6 text-center"
            data-aos='fade-down'>
            <h2 className="text-3xl md:text-4xl font-bold text-orange-500 mb-4">Our Journey</h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Founded in 2012 with a small team and a big vision, our restaurant began as a cozy spot for local food lovers.
                As our passion for hospitality and innovation grew, so did our operations — from a single location to multiple branches across the region.
                <br className="hidden md:block mt-2" />
                With the evolving needs of modern dining, we realized the importance of streamlining operations using smart technology.
                That’s when the idea for our <span className="font-semibold text-orange-500">Flavour Fusion</span> was born — a digital platform built from firsthand experience to make restaurant operations smoother, faster, and more efficient.
                <br className="hidden md:block mt-2" />
                Today, our system empowers restaurants of all sizes to deliver exceptional service, manage resources effortlessly, and thrive in a competitive food industry.
            </p>
        </div>
    );
};

export default AboutUs;