import React from 'react';
import AboutUs from './AboutUs';
import Chefs from './Chefs';
import Mission from './Mission';
import Gallary from './Gallary';
import Banner from './Banner';

const About = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Chefs></Chefs>
            <Mission></Mission>
            <Gallary></Gallary>
        </div>
    );
};

export default About;