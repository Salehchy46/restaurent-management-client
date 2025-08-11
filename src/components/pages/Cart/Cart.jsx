const Cart = ({ cart, handleClearCart, children }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for (const product of cart) {
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = totalPrice * 7 / 100;

    const grandTotal = totalPrice + totalShipping + tax;

    return (
        <div>
            <h4 className="text-3xl font-bold my-10">Order</h4>
            <p className="my-2 text-xl font-semibold">Selected Items : {quantity}</p>
            <p className="mb-2 text-xl font-semibold">Total Price : {totalPrice}</p>
            <p className="mb-2 text-xl font-semibold">Shipping : $ {totalShipping}</p>
            <p className="mb-2 text-xl font-semibold">Tax : ${tax.toFixed(2)}</p>
            <p className="mb-2 text-xl font-semibold">Grand Total : ${grandTotal.toFixed(2)}</p>
            <button onClick={handleClearCart} className='btn hover:bg-orange-500 my-5'>
                <span>Clear Cart</span>
            </button>
            {children}
        </div>
    );
};

export default Cart;