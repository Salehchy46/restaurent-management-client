import { useEffect, useState } from "react";
import { deleteShoppingCart } from "../../utils/addToCart";


const Cart = () => {
    const [cartData, setCartData] = useState([]);

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    useEffect(() => {
        const data = localStorage.getItem('food-cart');
        if (data) {
            setCartData(JSON.parse(data))
        }
    }, [])

    //for loop to get cart calculation
    // for (const product of cart) {
    //     totalPrice = totalPrice + product.price * product.quantity;
    //     totalShipping = totalShipping + product.shipping;
    //     quantity = quantity + product.quantity;
    // }

    const handleClearCart = () => {
        deleteShoppingCart();
    }

    const tax = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
            <div>
                {cartData ? (
                    <p>{cartData.length}</p>
                ) : (
                    <p>No user data found in local storage.</p>
                )}
            </div>
            <h4>Order</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Shipping : $ {totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn hover:bg-orange-500'>
                <span>Clear Cart</span>
            </button>
        </div>
    );
};

export default Cart;