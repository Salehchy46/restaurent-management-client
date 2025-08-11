import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utils/addToCart';
import ReviewItems from './ReviewItems';
import Cart from '../Cart/Cart';

const Orders = () => {

    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);

    const handleRemoveCart = (id) => {
        const remaining = cart.filter(product => product._id !== id);
        console.log(cart, id);
        setCart(remaining);
        removeFromDb(id);
    }

    console.log(cart);

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div>
            <div>
                {
                    cart.map(product => <ReviewItems
                        key={product._id}
                        product={product}
                        handleRemoveCart={handleRemoveCart}
                    ></ReviewItems>)
                }
            </div>
            <div>
                <Cart
                    cart={cart}
                    handleClearCart={handleClearCart}>
                    <Link to='/checkout'>
                        <button className='btn hover:bg-amber-500'>Proceed To Checkout</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;