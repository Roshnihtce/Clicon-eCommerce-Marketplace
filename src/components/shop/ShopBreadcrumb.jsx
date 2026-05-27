import { Container } from 'react-bootstrap'

import { Link } from 'react-router-dom'

import {
  HouseDoor,
  ChevronRight,
} from 'react-bootstrap-icons'

export default function ShopBreadcrumb() {
  return (
    <section className="shop-breadcrumb py-3">
      <Container>
        <div className="d-flex align-items-center gap-2 flex-wrap">
          {/* HOME */}

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
            className="text-decoration-none breadcrumb-active"
          >
            Shop
          </Link>
        </div>
      </Container>
    </section>
  )
}