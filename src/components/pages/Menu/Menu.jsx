import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/menu')
        .then(res => setItems(res.data))
    }, [])


    return (
        <div className='my-10'>
            <div
                className="hero min-h-44 lg:min-h-96 md:min-h-80 my-8 text-center rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/VW7z7gBR/Chat-GPT-Image-Jul-16-2025-02-39-30-AM.png)",
                }}
            >
            </div>
            <h2 className='text-4xl text-center font-bold pb-10'>Items of the menu : {items.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {
                    items.map(item => <div key={item.id}>
                        {/* <img src={item.image} alt="" /> */}
                        <button className='link link-neutral'>{item.foodName}</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;