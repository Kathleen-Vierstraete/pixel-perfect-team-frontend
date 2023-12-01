import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state: {
 *   - items: an array of shopping cart items
 * }
 */
const initialState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'shoppingCart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push({
                id: action.payload.id,
                price: action.payload.price,
                quantity: action.payload.quantity,
            });
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        updateQuantity: (state, action) => {
            const item = state.items.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;

const selectItems = (state) => state.cart.items;
const selectTotalQuantity = (state) => state.cart.items.reduce((acc, item) => acc + item.quantity, 0);
const selectTotalCost = (state) => {
    let totalCost = 0;
    for (const item of state.cart.items) {
        totalCost += item.quantity * item.price;
    }
    return totalCost;
};

export default cartSlice.reducer;
export { selectItems, selectTotalQuantity, selectTotalCost };
