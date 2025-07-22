import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Menu = () => {
    const [items, setItems] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");

    useEffect(() => {
        axios.get('http://localhost:5000/menu')
            .then(res => {
                setItems(res.data);
                setFilteredCategory(res.data);
            });
    }, []);

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredCategory(items);
        } else {
            const filtered = items.filter(item => item.category === category);
            setFilteredCategory(filtered);
        }
    };

    const categories = ["All", ...new Set(items.map(item => item.category))];

    return (
        <div className='my-10'>
            {/* Banner */}
            <div
                className="hero min-h-44 lg:min-h-96 md:min-h-80 my-8 text-center rounded-xl"
                style={{
                    backgroundImage:
                        "url(https://i.ibb.co/VW7z7gBR/Chat-GPT-Image-Jul-16-2025-02-39-30-AM.png)",
                }}
            />
            {/* Category Buttons */}
            <div className='flex flex-wrap gap-2 justify-center mb-6'>
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => handleCategoryChange(cat)}
                        className={`btn ${selectedCategory === cat ? "btn-active" : "btn-outline"}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <h2 className='text-4xl text-center font-bold pb-10'>
                Items of the menu: {filteredCategory.length}
            </h2>

            {/* Menu Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {filteredCategory.map(item => (
                    <div key={item.id} className="card bg-base-100 h-80 text-center shadow-sm">
                        <figure>
                            <img src={item.image} alt="Food Item" />
                        </figure>
                        <div className="card-body">
                            <h2 className="font-medium text-xl">{item.foodName}</h2>
                            <p>{item.category}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Menu;
