import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./authenticationSlice";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

/**
 * To configure the store redux.
 *
 * @author Peter Mollet
 */
export const store = configureStore({
  reducer: {
    auth: authenticationReducer, 
    cart: cartSlice,
    product:productSlice,
  },
});
