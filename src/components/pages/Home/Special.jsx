import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Special = () => {

    const [ special, setSpecial ] = useState([]);

    useEffect(() => {
        fetch('./special.json')
            .then(res => res.json())
            .then(data => setSpecial(data))
    }, [setSpecial])

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: false,
        })
    }, [])

    return (
        <div className='py-10'>
            <h1 className='text-3xl font-bold text-center pb-10'>Special Dishes are avialable!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6" data-aos='fade-down'>
                {special.map((dish) => (
                    <div key={dish.id} className="shadow-lg rounded-xl p-4">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="rounded-md h-48 w-full object-cover"
                        />
                        <h3 className="text-xl font-semibold mt-3">{dish.name}</h3>
                        <span className="text-sm text-orange-500 font-medium">
                            {dish.tag}
                        </span>
                        <p className=" text-sm mt-2">{dish.description}</p>
                        <p className="mt-2 font-bold text-orange-500">৳ {dish.price}</p>
                        <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full">
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Special;