import React, { useEffect, useState } from 'react';
import Feature from './Feature';
import Marquee from 'react-fast-marquee';

const Features = () => {
    const [features, setFeatures] = useState([]);

    useEffect(() => {
        fetch('./features.json')
            .then(res => res.json())
            .then(data => setFeatures(data))
    }, [])

    return (
        <div className='my-10'>
            <h2 className='text-center font-bold text-3xl'>Features</h2>
            <Marquee pauseOnHover speed={100}>
                {
                    features.map((feature, id) => <Feature
                        key={id}
                        feature={feature}
                    ></Feature>)
                }
            </Marquee>
        </div>
    );
};

export default Features;