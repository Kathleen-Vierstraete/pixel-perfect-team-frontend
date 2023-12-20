import { createSlice } from '@reduxjs/toolkit';
import { getCart, removeCart, removeCartItem, setCart } from '../services/cartServices';

/**
 * Initial state: {
 *   - items: an array of cart items
 * }
 */
const initialState = {
    items: getCart(),
    purchaseId: 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const product = action.payload;
            const existingItem = state.items.find(p => p.id === product.id);

            if (existingItem) {
                existingItem.quantity += product.quantity;
            } else {
                state.items.push({
                    ...product,
                });
            }

            if (existingItem && existingItem.quantity <= 0) {
                state.items = state.items.filter(item => item.id !== action.payload.id);
                removeCartItem(action.payload.id)
                return;
            }

            setCart(product);
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            removeCartItem(action.payload.id)
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
            removeCart()
        },
        setPurchase: (state, action) => {
            state.purchaseId = action.payload.id;
        }
    },
});

export const { addItem, removeItem, updateQuantity, clearCart, setPurchase } = cartSlice.actions;

const selectItems = (state) => state.cart.items;
const selectTotalQuantity = (state) => selectItems(state).reduce((acc, item) => acc + item.quantity, 0);
const selectTotalCost = (state) => {
    let totalCost = 0;
    for (const item of selectItems(state)) {
        totalCost += item.quantity * item.price;
    }
    return totalCost;
};
const selectPurchaseId = (state) => state.cart.purchaseId

export default cartSlice.reducer;
export { selectItems, selectTotalQuantity, selectTotalCost,selectPurchaseId };
