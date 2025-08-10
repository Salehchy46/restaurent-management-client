import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Mission = () => {

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className="card py-12 px-6 text-center" data-aos='flip-up€'>
            <h2 className="text-3xl font-bold text-orange-500 mb-6">Our Mission</h2>
            <p className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed">
                Our mission is to empower restaurants with intuitive technology that streamlines every aspect of daily operations — from order management to staff coordination. We aim to reduce complexity and improve efficiency, allowing chefs and restaurant owners to focus on what they love: serving great food and creating memorable dining experiences.
            </p>
        </div>

    );
};

export default Mission;