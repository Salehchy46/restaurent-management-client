// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTrashAlt } from '@fortawesome/fontawesome-free'

const Cart = (cart, handleClearCart, children) => {

    let quantity = 0;
    let totalPrice = 0;
    let totalShipping = 0;

    //for loop to get cart calculation
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = totalPrice * 5 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
            <h4>Order</h4>
            <p>Selected Items : {quantity}</p>
            <p>Total Price : {totalPrice}</p>
            <p>Shipping : $ {totalShipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn hover:bg-orange-500'>
                <span>Clear Cart</span>
                {/* <FontAwesomeIcon icon={faTrashAlt} /> */}
            </button>
            {children}
        </div>
    );
};

export default Cart;