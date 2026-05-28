import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

const compareSlice = createSlice({
  name: 'compare',
  initialState,
  reducers: {
    toggleCompare: (state, action) => {
      const product = action.payload

      const exists = state.items.find(
        (item) => item.id === product.id
      )

      // REMOVE if already exists
      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== product.id
        )
        return
      }

      // LIMIT 3 PRODUCTS
      if (state.items.length >= 3) return

      state.items.push(product)
    },

    removeCompare: (state, action) => {
      state.items = state.items.filter(
        (item) => item.id !== action.payload
      )
    },

    clearCompare: (state) => {
      state.items = []
    },
  },
})

export const {
  toggleCompare,
  removeCompare,
  clearCompare,
} = compareSlice.actions

export default compareSlice.reducer