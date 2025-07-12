import React from 'react';
import Marquee from "react-fast-marquee";

const Feature = ({ feature }) => {
    const { icon, title, description } = feature
    return (
        <div className="w-60 h-64 mx-6 mt-5 flex flex-col justify-start items-center text-center border-2 border-orange-300 rounded-3xl shadow-md p-4 bg-white">
            <h3 className="text-5xl mb-3">{icon}</h3>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600 leading-snug">
                {description}
            </p>
        </div>

    );
};

export default Feature;