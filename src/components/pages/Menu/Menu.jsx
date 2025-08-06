import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { Link } from 'react-router-dom';

const Menu = () => {


    // set data by state
    const [items, setItems] = useState([]);
    const [filteredCategory, setFilteredCategory] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    const numberOfPages = Math.ceil(pageCount / itemsPerPage) || 0;
    const pages = [...Array(numberOfPages).keys()];

    const readyAxios = useAxios();

    // Load products by page and size
    useEffect(() => {
        readyAxios.get(`/menuByPage?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => {
                setItems(res.data);
                setFilteredCategory(res.data);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }, [readyAxios, currentPage, itemsPerPage]);

    // Load total item count for pagination
    useEffect(() => {
        readyAxios.get('/productpages')
            .then(res => {
                setPageCount(res.data.count);
            })
            .catch(err => console.log(err))
    }, [readyAxios]);

    // Handle category filter
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === "All") {
            setFilteredCategory(items);
        } else {
            const filtered = items.filter(item => item.category === category);
            setFilteredCategory(filtered);
        }
    };

    // Handle page size selection
    const handleItemsPerPage = (e) => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    };

    const categories = ["All", ...new Set(items.map(item => item.category))];


    // handle Perviious  Page 
    const handlePreviousPage = () => {
        if(currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    //handleNextPage
    const handleNextPage = () => {
        if(currentPage < pages.length - 1) {
            setCurrentPage(currentPage + 1)
        }
    }

    
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
                        className={`btn ${selectedCategory === cat ? "btn-active bg-orange-600 text-white" : "btn-active"}`}>
                        {cat}
                    </button>
                ))}
            </div>

            <h2 className='text-4xl text-center font-bold pb-10'>
                Items of the menu: {filteredCategory.length}
            </h2>

            {/* Menu Cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {filteredCategory.map(item => (
                    <div key={item.id} className="card bg-base-100 h-80 text-center shadow-sm">
                        <figure>
                            <img src={item.image} alt="Food Item" />
                        </figure>
                        <div className="card-body">
                            <div className=''>
                                <h2 className="font-medium text-xl">{item.foodName}</h2>
                            </div>
                            <div className=''>
                                <p className={item.available ? 'text-green-500 rounded-2xl' : 'text-red-500 rounded-2xl'}>{item.category}</p>
                            </div>
                            <div className="card-actions justify-center">
                                <Link to={`/menu/${item._id}`}>
                                    <button className="btn btn-sm btn-active hover:bg-orange-600 hover:text-white">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Pagination */}
            <div>
                <p>Current Page: {currentPage}</p>
                <button onClick={handlePreviousPage} className='btn mr-2'>Prev</button>
                {
                    pages.map(page => <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`btn mx-1 ${currentPage === page ? 'bg-orange-600 text-white' : 'btn-outline'}`}>
                        {page}
                    </button>)
                }
                <button onClick={handleNextPage} className='btn mx-2'>Next</button>
                <select onChange={handleItemsPerPage} value={itemsPerPage} name="" id="">
                    <option value="6">6</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                </select>
            </div>
        </div>
    );
};

export default Menu;
