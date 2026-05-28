import { Container, Row, Col, Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import {
  Cart3,
  Heart,
  Person,
  Search,
} from 'react-bootstrap-icons'

import { setSearch } from '../../../store/slices/filterSlice'

export default function MainHeader() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  )

  const search = useSelector(
    (state) => state.filters.search
  )

  const handleSearch = () => {
    navigate('/shop')
  }

  return (
    <div className="main-header">
      <Container>
        <Row className="align-items-center">

          {/* LOGO (FIXED ROUTE) */}
          <Col lg={2}>
            <Link
              to="/dashboard"
              className="logo text-decoration-none"
            >
              <div className="logo-circle">O</div>
              <h2>CLICON</h2>
            </Link>
          </Col>

          {/* SEARCH (FIXED + WORKING) */}
          <Col lg={7}>
            <div className="search-box">
              <Form.Control
                type="text"
                placeholder="Search for anything..."
                value={search}
                onChange={(e) =>
                  dispatch(setSearch(e.target.value))
                }
              />

              <button onClick={handleSearch}>
                <Search />
              </button>
            </div>
          </Col>

          {/* ICONS */}
          <Col lg={3}>
            <div className="header-icons">

              {/* CART */}
              <Link to="/cart">
                <button className="cart-btn">
                  <Cart3 />
                  <span>{cartItems.length}</span>
                </button>
              </Link>

              {/* WISHLIST */}
              <Link to="/wishlist">
                <button>
                  <Heart />
                  <span>{wishlistItems.length}</span>
                </button>
              </Link>

              {/* USER */}
              <Link to="/dashboard">
                <button>
                  <Person />
                </button>
              </Link>

            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}