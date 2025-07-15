import React from 'react';
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        <div className="card flex flex-col md:flex-row items-center justify-between gap-8 my-10 px-4 md:px-10">
            {/* Text Section */}
            <div className="flex-1 text-center md:text-left space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                    Empower Your Restaurant with FlavorFusion
                </h2>
                <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    Discover the all-in-one solution for modern restaurant operations. From managing your menu, handling reservations, and processing online orders to streamlining staff tasks — our Restaurant Management System is designed to simplify your workflow and enhance the dining experience.
                </p>
                <p className="text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    Whether you're running a cozy café or a multi-branch restaurant, <span className="font-semibold text-[#e67e22]">FlavorFusion</span> empowers you with tools to deliver fast, reliable, and top-notch service every day.
                </p>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center">
                <div>
                    <img
                        src="https://i.ibb.co/4ZB2zLpB/download-3.png"
                        alt="Restaurant system"
                        className="w-60 md:w-96 rounded-full shadow-2xl transition-transform hover:scale-105 duration-300"
                    />
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

export default Intro;