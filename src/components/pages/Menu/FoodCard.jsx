import React, { useEffect, useState } from 'react';
import useAxios from '../../../hooks/useAxios';
import { useLoaderData, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { SiTicktick } from "react-icons/si";
import { CgUnavailable } from "react-icons/cg";
import { addToDb, getShoppingCart } from '../../utils/addToCart';
import Cart from '../Cart/Cart';

const FoodCard = () => {

    // bring data from cartloaderData
    const loadedCart = useLoaderData();

    const [card, setCard] = useState(null);
    const [cart, setCart] = useState([]);

    console.log(cart);
    // const [isLoading, setIsLoading] = useState(false);

    const { id } = useParams();
    const instantAxios = useAxios();
    const { loading } = useAuth();

    useEffect(() => {
        instantAxios.get(`/menu/${id}`)
            .then(res => {
                console.log(res.data);
                setCard(res.data);
                // setIsLoading(true)
            })
    }, [instantAxios, id]);

    useEffect(() => {
        const storedCart = getShoppingCart();
        setCart(storedCart);
    }, []);

    if (!card) {
        return loading;
    }

    const { foodName, image, price, category, restaurant, chef, ingredients, rating, available, preparationTime, calories, spicyLevel } = card;

    //cart data 
    const handleAddToCart = (product) => {
        let newCart = [];

        const exists = loadedCart.find(pd => pd._id === product._id)
        if(!exists) {
            product.quantity = 1;
            newCart = [...loadedCart, product]
        } 
        else {
            exists.quantity = exists.quantity + 1;
            const remaining = loadedCart.filter(pd => pd._id === product.id);
            newCart = [...remaining, exists];
        }
        setCart(newCart)
        addToDb(product._id)
    };

    return (
        <div className="bg-base-200 min-h-96">
            <div className="hero-content flex-col lg:flex-row md:flex-row lg:items-stretch md:items-stretch gap-5">
                <img
                    src={image}
                    className="max-w-sm rounded-lg shadow-2xl lg:mr-5"
                    alt={foodName}
                />
                <div className='bg-white text-black p-10 rounded-xl shadow-2xl text-left flex'>
                    <div className=''>
                        <h1 className="lg:text-5xl md:text-3xl text-xl font-bold">{foodName}</h1>
                        <div className='py-3'>
                            <p className=" font-bold text-orange-600">Price : ${price}</p>
                        </div>
                        <p className="">Category : {category}</p>
                        <p className="">Chef : {chef}</p>
                        <p className="">Restaurant : {restaurant}</p>
                        <p className="">Rating : {rating}</p>
                        <p className="">Spicy Level : {spicyLevel}</p>
                        <p className="">Preparation Time : {preparationTime}</p>
                        <p className="">Calories : {calories}</p>
                        <div className="">
                            <p className="">Ingredients:</p>
                            <div className='grid grid-cols-3 gap-2'>
                                {ingredients.map((ingredient, index) => (
                                    <p
                                        key={index}
                                        className='border rounded-md px-2 my-1 text-center bg-gray-200 hover:text-blue-200 hover:bg-orange-600'>{ingredient}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='pl-3'>
                        {available === true ? <div className="badge bg-green-500 text-white"><SiTicktick /></div> : <div className="badge bg-red-500 text-white"><CgUnavailable></CgUnavailable></div>}
                    </div>
                </div>
            </div>
            <button onClick={() => handleAddToCart(card)} className="btn btn-active w-1/2 mt-10 hover:bg-orange-600">
                Add to Cart
            </button>
        </div>
    );
};

export default FoodCard;