import { createSlice } from '@reduxjs/toolkit';

/**
 * Initial state: {
 *   - products: an array of product
 * }
 *  @author Eric Sergueev
 */
const initialState = {
    products: null,
};

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProduct: (state, action) => {
            state.products = action.payload;
        },
    },
});

export const { setProduct } = productSlice.actions;

const getProducts = (state) => state.product.products;

export default productSlice.reducer;
export { getProducts };
