// import { useEffect, useState } from "react";
import { deleteShoppingCart } from "../../utils/addToCart";


const Cart = () => {
    // const [cartData, setCartData] = useState([]);

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    // useEffect(() => {
    //     const data = localStorage.getItem('food-cart');
    //     if (data) {
    //         setCartData(JSON.parse(data))
    //     } else {
    //         setCartData([])
    //     }
    // }, [])

    // console.log(cartData);

    //for loop to get cart calculation
    // for (const product of cartData) {
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
            {/* <div>
                {cartData ? (
                    <p>{cartData.length}</p>
                ) : (
                    <p>No user data found in local storage.</p>
                )}
            </div> */}
            <h4 className="text-3xl font-bold my-10">Order</h4>
            <p className="my-2 text-xl font-semibold">Selected Items : {quantity}</p>
            <p className="mb-2 text-xl font-semibold">Total Price : {totalPrice}</p>
            <p className="mb-2 text-xl font-semibold">Shipping : $ {totalShipping}</p>
            <p className="mb-2 text-xl font-semibold">Tax : ${tax.toFixed(2)}</p>
            <p className="mb-2 text-xl font-semibold">Grand Total : ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn hover:bg-orange-500 my-5'>
                <span>Clear Cart</span>
            </button>
        </div>
    );
};

export default Cart;