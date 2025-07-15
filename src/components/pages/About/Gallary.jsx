import React from 'react';

const Gallary = () => {
    return (
        <div className="card py-12 text-center">
            <h2 className="text-3xl font-bold text-orange-500 mb-8">Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6">
                {[
                    "https://i.ibb.co/6DFt60n/food1.jpg",
                    "https://i.ibb.co/LxGn9Yq/food2.jpg",
                    "https://i.ibb.co/s1C1MfS/food3.jpg",
                    "https://i.ibb.co/9t6gk2z/food4.jpg",
                    "https://i.ibb.co/XJLSbc1/food5.jpg",
                    "https://i.ibb.co/x6Kn64p/food6.jpg",
                ].map((url, index) => (
                    <img
                        key={index}
                        src={url}
                        alt={`Gallery Image ${index + 1}`}
                        className="w-full h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                    />
                ))}
            </div>
        </div>

    );
};

export default Gallary;