import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div
            className="hero min-h-[500px] my-8 lg:p-20 p-10 text-center rounded-xl"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/nMHkZp1Z/The-Lighthouse-Restaurant-Nakheel-Mall-3-2341e60b-b61c-4f27-9969-a1255dce0f6b.webp)",
            }}
        >
            <div className="hero-overlay" style={{}}></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-lg">
                    <div className='items-center'>
                        <h1 className="mb-5 lg:text-5xl text-white text-2xl font-bold">You're Welcome</h1>
                    </div>
                    <p className="mb-5">
                        Smart Management. Smoother Service. Satisfied Customers.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                        <Link>
                            <button className="bg-orange-600 font-bold text-white px-6 py-3 rounded-full hover:bg-orange-700 transition">
                                Order Now
                            </button>
                        </Link>
                        <Link>
                            <button className="bg-white font-bold text-orange-600 border border-orange-600 px-6 py-3 rounded-full hover:bg-orange-100 transition">
                                Book a Table
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;