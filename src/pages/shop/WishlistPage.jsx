import { useDispatch, useSelector } from 'react-redux'

import {
  Heart,
  Cart3,
  Trash,
} from 'react-bootstrap-icons'

import {
  Container,
  Row,
  Col,
  Card,
  Button,
} from 'react-bootstrap'

import MainLayout from '../../layout/MainLayout'

import { addToCart } from '../../store/slices/cartSlice'

import {
  removeFromWishlist,
} from '../../store/slices/wishlistSlice'

export default function WishlistPage() {
  const dispatch = useDispatch()

  const wishlistItems = useSelector(
    (state) => state.wishlist.wishlistItems
  )

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  // ADD TO CART
  const handleAddToCart = (item) => {
    const alreadyInCart = cartItems.some(
      (cartItem) => cartItem.id === item.id
    )

    if (alreadyInCart) {
      alert('Already added in Cart 🛒')
      return
    }

    dispatch(addToCart(item))
    alert('Added to Cart Successfully 🛒')
  }

  // REMOVE WISHLIST
  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id))
    alert('Removed from Wishlist 💔')
  }

  return (
    <MainLayout>
      <Container className="py-4">

        <h3 className="mb-4">
          <Heart /> Wishlist Page
        </h3>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-5">

            <Heart
              size={40}
              className="mb-3"
            />

            <h5>
              Your wishlist is empty
            </h5>

            <p className="text-muted">
              Save your favorite products here ❤️
            </p>

          </div>
        ) : (
          wishlistItems.map((item) => (
            <Card
              key={item.id}
              className="mb-3 shadow-sm"
            >
              <Card.Body>

                <Row className="align-items-center">

                  {/* IMAGE */}
                  <Col md={2}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="img-fluid"
                    />
                  </Col>

                  {/* CONTENT */}
                  <Col md={5}>

                    <h5>{item.title}</h5>

                    <p className="mb-1 text-muted">
                      Price: {item.price}
                    </p>

                    {item.category && (
                      <small className="text-muted">
                        Category: {item.category}
                      </small>
                    )}

                  </Col>

                  {/* ACTIONS */}
                  <Col
                    md={5}
                    className="d-flex gap-2 justify-content-md-end mt-3 mt-md-0"
                  >

                    {/* ADD TO CART */}
                    <Button
                      variant="dark"
                      onClick={() =>
                        handleAddToCart(item)
                      }
                    >
                      <Cart3 className="me-2" />
                      Add To Cart
                    </Button>

                    {/* REMOVE */}
                    <Button
                      variant="outline-danger"
                      onClick={() =>
                        handleRemove(item.id)
                      }
                    >
                      <Trash className="me-2" />
                      Remove
                    </Button>

                  </Col>

                </Row>

              </Card.Body>
            </Card>
          ))
        )}

      </Container>
    </MainLayout>
  )
}