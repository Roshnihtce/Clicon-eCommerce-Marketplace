import { Routes, Route } from 'react-router-dom'
import SignIn from '../pages/auth/SignIn'
import Dashboard from '../pages/dashboard/Dashboard'
import Shop from '../pages/shop/Shop'
import ProductDetailsPage from '../pages/shop/ProductDetailsPage'

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
    </Routes>
  )
}