import React from 'react';

const Cart = () => {

    let quantity = 0; 
    let totalPrice = 0;
    let totalShipping = 0;

    return (
        <div>
            <h4>Order</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Shipping : $ {totalShipping}</p>
        </div>
    );
};

export default Cart;