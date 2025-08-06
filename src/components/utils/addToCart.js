// Use Local Storage to use cart
const addToDb = id => {
    let shoppingCart = getShoppingCart();

    //add quantity
    const quantity = shoppingCart[id];
    if(!quantity) {
        shoppingCart[id] = 1;
    }
    else{
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    }

    localStorage.setItem('food-cart', JSON.stringify(shoppingCart))
}

const getShoppingCart = () => {
    let shoppingCart = {};

    //get cart from localStorage
    const storedCart = localStorage.getItem('food-cart');
    console.log(storedCart);
    if(storedCart) {
        shoppingCart = JSON.parse(storedCart) || ''
    }

    console.log(localStorage.getItem('food-cart'));

    return shoppingCart;
}

// Delete Items 
const removeFromDb = id => {
    const shoppingCart = getShoppingCart();
    if(id in shoppingCart) {
        delete shoppingCart[id];
        localStorage.setItem('food-cart', JSON.stringify(shoppingCart));
    }
}

// shopping cart items to get


// delete whole cart to clear wrong cart items
const deleteShoppingCart = () => {
    localStorage.removeItem('food-cart');
}

export {
    addToDb,
    removeFromDb,
    getShoppingCart,
    deleteShoppingCart,
}