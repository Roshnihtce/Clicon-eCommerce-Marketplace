import ShopToolbar from './ShopToolbar'

import ProductGrid from './ProductGrid'

import ShopPagination from './ShopPagination'

export default function ShopProducts() {
  return (
    <div className="shop-products">
      <ShopToolbar />

      <ProductGrid />

      <ShopPagination />
    </div>
  )
}