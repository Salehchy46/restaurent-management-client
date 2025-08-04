import { getShoppingCart } from "../utils/addToCart";

const cartProductsLoader = async () => {

    //getting cart items from addToCart.js
    const storedCart = getShoppingCart();
    const storedCartIds = Object.keys(storedCart);
    console.log(storedCart);

    //post ids to backend
    const loadedProducts = await fetch('http://localhost:5000/productsByIds', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(storedCartIds),
    });

    const products = await loadedProducts.json();

    const savedCart = [];

    // add product by ids
    for (const id in storedCart) {
        const addedProduct = products.find(food => food._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
};

export default cartProductsLoader;