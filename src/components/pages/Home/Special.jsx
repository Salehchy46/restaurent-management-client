import React, { useEffect, useState } from 'react';

const Special = () => {

    const [ special, setSpecial ] = useState([]);

    useEffect(() => {
        fetch('./special.json')
            .then(res => res.json())
            .then(data => setSpecial(data))
    }, [setSpecial])


    return (
        <div className='py-10'>
            <h1 className='text-3xl font-bold text-center pb-10'>Special Dishes are avialable!</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-6">
                {special.map((dish) => (
                    <div key={dish.id} className="bg-white shadow-lg rounded-xl p-4">
                        <img
                            src={dish.image}
                            alt={dish.name}
                            className="rounded-md h-48 w-full object-cover"
                        />
                        <h3 className="text-xl font-semibold mt-3">{dish.name}</h3>
                        <span className="text-sm text-orange-600 font-medium">
                            {dish.tag}
                        </span>
                        <p className="text-gray-500 text-sm mt-2">{dish.description}</p>
                        <p className="mt-2 font-bold text-orange-700">৳ {dish.price}</p>
                        <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full">
                            Order Now
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Special;