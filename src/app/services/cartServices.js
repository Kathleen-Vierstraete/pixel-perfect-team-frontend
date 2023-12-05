const CART_NAME = 'cart';

/**
 * To save the cart using for the back end requests
 * Save in the local storage
 *
 * @param {Array[string]} cart: to save
 * @author Eric Sergueev
 */
export function setCart(cart) {
    let cartSaved = getCart();
    let existingCart = cartSaved.find(product => product.id === cart.id);

    if (existingCart) {
        existingCart.quantity += cart.quantity;
    } else {
        cartSaved.push(cart);
    }

    localStorage.setItem(CART_NAME, JSON.stringify(cartSaved));
}

/**
 * To get the cart back-end saved in the localstorage
 *
 * @return {Array[string]} cart
 * @author Eric Sergueev
 */
export function getCart() {
    return localStorage.getItem(CART_NAME) ? JSON.parse(localStorage.getItem(CART_NAME)) : [];
}

/**
 * Delete the cart from the localstorage
 *
 * @author Eric Sergueev
 */
export function removeCart() {
    localStorage.removeItem(CART_NAME);
}

/**
 * Remove specific item of cart
 *
 * @param {int} id
 * @author Eric Sergueev
 */
export function removeCartItem(id) {
    let cartSaved = getCart();
    
    let result = cartSaved.filter(item => item.id !== id)
    localStorage.setItem(CART_NAME, JSON.stringify(result));
}