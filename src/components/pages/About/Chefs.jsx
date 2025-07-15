import React, { useEffect, useState } from 'react';

const Chefs = () => {

    const [chefs, setChefs] = useState([]);

    useEffect(() => {
        fetch('./chefs.json')
            .then(res => res.json())
            .then(data => setChefs(data))
    }, [])

    return (
        <div className="card py-12 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-8">Meet Our Chefs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
                {
                    chefs.map((chef, index) => (
                        <div key={index} className="bg-white shadow-md rounded-xl p-4">
                            <img
                                src={chef.img}
                                alt={chef.name}
                                className="w-40 h-40 mx-auto object-cover rounded-full shadow"
                            />
                            <h3 className="mt-4 text-xl font-semibold">{chef.name}</h3>
                            <p className="text-orange-500 text-sm">{chef.role}</p>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Chefs;