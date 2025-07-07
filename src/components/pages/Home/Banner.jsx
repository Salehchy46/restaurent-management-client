import React from 'react';

const Banner = () => {
    return (
        <div
            className="hero min-h-[500px] my-8 lg:p-20 p-10"
            style={{
                backgroundImage:
                    "url(https://i.ibb.co/nMHkZp1Z/The-Lighthouse-Restaurant-Nakheel-Mall-3-2341e60b-b61c-4f27-9969-a1255dce0f6b.webp)",
            }}
        >
            <div className="hero-overlay" style={{}}></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;