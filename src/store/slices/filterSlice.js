import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
  sort: 'popular', // popular | low | high | newest
  category: 'All',
  price: {
    min: 0,
    max: 100000,
  },
  brand: [],
  tag: '',
}

const filterSlice = createSlice({
  name: 'filters',
  initialState,

  reducers: {
    // 🔍 SEARCH
    setSearch: (state, action) => {
      state.search = String(action.payload || '')
    },

    // 🔽 SORT
    setSort: (state, action) => {
      const allowedSorts = ['popular', 'low', 'high', 'newest']
      const value = action.payload

      state.sort = allowedSorts.includes(value)
        ? value
        : 'popular'
    },

    // 📂 CATEGORY
    setCategory: (state, action) => {
      state.category = String(action.payload || 'All')
    },

    // 💰 PRICE RANGE
    setPriceRange: (state, action) => {
      const min = Number(action.payload?.min)
      const max = Number(action.payload?.max)

      state.price = {
        min: Number.isFinite(min) ? min : 0,
        max: Number.isFinite(max) ? max : 100000,
      }
    },

    // 🏷️ BRAND TOGGLE
    toggleBrand: (state, action) => {
      const brand = action.payload

      if (!brand || typeof brand !== 'string') return

      const index = state.brand.indexOf(brand)

      if (index !== -1) {
        state.brand.splice(index, 1)
      } else {
        state.brand.push(brand)
      }
    },

    // 🏷️ TAG
    setTag: (state, action) => {
      state.tag = String(action.payload || '')
    },

    // 🧹 RESET FILTERS
    clearFilters: (state) => {
      state.search = ''
      state.sort = 'popular'
      state.category = 'All'
      state.price = { min: 0, max: 100000 }
      state.brand = []
      state.tag = ''
    },
  },
})

export const {
  setSearch,
  setSort,
  setCategory,
  setPriceRange,
  toggleBrand,
  setTag,
  clearFilters,
} = filterSlice.actions

export default filterSlice.reducer