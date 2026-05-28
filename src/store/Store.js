import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './slices/cartSlice'

import wishlistReducer from './slices/wishlistSlice'
import filterReducer from './slices/filterSlice'
import compareReducer from './slices/compareSlice'


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filters: filterReducer,
    compare: compareReducer,
  },
})