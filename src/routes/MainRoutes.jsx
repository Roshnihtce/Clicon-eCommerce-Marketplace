import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/auth/SignIn'
import Dashboard from '../pages/dashboard/Dashboard'
import Shop from '../pages/shop/Shop'
import ProductDetailsPage from '../pages/shop/ProductDetailsPage'
import CartPage from '../pages/shop/CartPage'
import WishlistPage from '../pages/shop/WishlistPage'
import CheckoutPage from '../pages/shop/CheckoutPage'
import TrackOrderPage from '../pages/dashboard/TrackOrderPage'
import ComparePage from '../pages/dashboard/ComparePage'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/shop" element={<Shop />} />
      <Route
        path="/product/:id"
        element={<ProductDetailsPage />}
      />

      <Route
        path="/cart"
        element={<CartPage />}
      />

      <Route
        path="/wishlist"
        element={<WishlistPage />}
      />

      <Route
        path="/checkout"
        element={<CheckoutPage />}
      />

      <Route
        path="/track-orders"
        element={<TrackOrderPage />}
      />

      <Route
        path="/compare"
        element={<ComparePage />}
      />
    </Routes>
  )
}