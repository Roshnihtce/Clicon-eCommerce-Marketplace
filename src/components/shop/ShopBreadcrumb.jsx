import { Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom'
import { HouseDoor, ChevronRight } from 'react-bootstrap-icons'

export default function ShopBreadcrumb() {
  const location = useLocation()

  // current path detect
  const path = location.pathname

  const isShop = path === '/shop'
  const isCart = path === '/cart'
  const isWishlist = path === '/wishlist'
  const isCheckout = path === '/checkout'
  const isTrack = path === '/track-orders'
  const isProduct = path.includes('/product/')

  return (
    <section className="shop-breadcrumb py-3">
      <Container>
        <div className="d-flex align-items-center gap-2 flex-wrap">

          {/* HOME / DASHBOARD */}
          <Link
            to="/dashboard"
            className="d-flex align-items-center gap-2 text-decoration-none breadcrumb-link"
          >
            <HouseDoor size={14} />
            <span>Home</span>
          </Link>

          <ChevronRight size={12} />

          {/* SHOP */}
          <Link
            to="/shop"
            className={`text-decoration-none ${
              isShop ? 'breadcrumb-active' : 'breadcrumb-link'
            }`}
          >
            Shop
          </Link>

          {/* DYNAMIC PART */}
          {isCart && (
            <>
              <ChevronRight size={12} />
              <span className="breadcrumb-active">Cart</span>
            </>
          )}

          {isWishlist && (
            <>
              <ChevronRight size={12} />
              <span className="breadcrumb-active">
                Wishlist
              </span>
            </>
          )}

          {isCheckout && (
            <>
              <ChevronRight size={12} />
              <span className="breadcrumb-active">
                Checkout
              </span>
            </>
          )}

          {isTrack && (
            <>
              <ChevronRight size={12} />
              <span className="breadcrumb-active">
                Track Orders
              </span>
            </>
          )}

          {isProduct && (
            <>
              <ChevronRight size={12} />
              <span className="breadcrumb-active">
                Product Details
              </span>
            </>
          )}

        </div>
      </Container>
    </section>
  )
}


// import { Container } from 'react-bootstrap'

// import { Link } from 'react-router-dom'

// import {
//   HouseDoor,
//   ChevronRight,
// } from 'react-bootstrap-icons'

// export default function ShopBreadcrumb() {
//   return (
//     <section className="shop-breadcrumb py-3">
//       <Container>
//         <div className="d-flex align-items-center gap-2 flex-wrap">
//           {/* HOME */}

//           <Link
//             to="/dashboard"
//             className="d-flex align-items-center gap-2 text-decoration-none breadcrumb-link"
//           >
//             <HouseDoor size={14} />

//             <span>Home</span>
//           </Link>

//           <ChevronRight size={12} />

//           {/* SHOP */}

//           <Link
//             to="/shop"
//             className="text-decoration-none breadcrumb-active"
//           >
//             Shop
//           </Link>
//         </div>
//       </Container>
//     </section>
//   )
// }