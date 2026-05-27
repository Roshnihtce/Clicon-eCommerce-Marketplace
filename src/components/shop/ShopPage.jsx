import ShopSidebar from './ShopSidebar'
import ShopProducts from './ShopProducts'

export default function ShopPage() {
  return (
    <section className="shop-page">
      <div className="container">
        <div className="row">
          
          <div className="col-lg-3">
            <ShopSidebar />
          </div>

          <div className="col-lg-9">
            <ShopProducts />
          </div>

        </div>
      </div>
    </section>
  )
}