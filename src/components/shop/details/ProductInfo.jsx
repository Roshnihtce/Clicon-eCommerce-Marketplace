import {
  StarFill,
  Heart,
  ArrowRepeat,
  Cart3,
} from 'react-bootstrap-icons'

import {
  Row,
  Col,
  Form,
} from 'react-bootstrap'

import { useDispatch } from 'react-redux'

import {
  addToWishlist,
} from '../../../store/slices/wishlistSlice'

export default function ProductInfo({
  product,
  quantity,
  increaseQty,
  decreaseQty,
  handleAddToCart,
  handleBuyNow,
}) {
  const dispatch = useDispatch()

  return (
    <div className="product-info">
      {/* RATING */}
      <div className="details-rating">
        {[1, 2, 3, 4, 5].map((item) => (
          <StarFill key={item} />
        ))}

        <span className="rating-text">
          4.7 Star Rating
        </span>

        <span className="review-text">
          (21,671 User feedback)
        </span>
      </div>

      {/* TITLE */}
      <h2>{product.title}</h2>

      {/* META */}
      <div className="product-meta">
        <div className="left">
          <span>
            Sku:
            <strong> A264671</strong>
          </span>

          <span>
            Brand:
            <strong> Apple</strong>
          </span>
        </div>

        <div className="right">
          <span>
            Availability:
            <strong className="stock">
              {' '}
              In Stock
            </strong>
          </span>

          <span>
            Category:
            <strong>
              {' '}
              Electronics Devices
            </strong>
          </span>
        </div>
      </div>

      {/* PRICE */}
      <div className="details-price">
        <span className="new-price">
          $1699
        </span>

        <span className="old-price">
          $1999.00
        </span>

        <span className="discount">
          21% OFF
        </span>
      </div>

      {/* OPTIONS */}
      <div className="product-options">
        <Row className="g-4">
          <Col lg={6}>
            <div className="option-group">
              <label className="option-label">
                Color
              </label>

              <div className="color-options">
                <span className="color-circle active"></span>
                <span className="color-circle"></span>
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="option-group">
              <label className="option-label">
                Size
              </label>

              <Form.Select>
                <option>
                  14-inch Liquid Retina XDR
                  display
                </option>
              </Form.Select>
            </div>
          </Col>

          <Col lg={6}>
            <div className="option-group">
              <label className="option-label">
                Memory
              </label>

              <Form.Select>
                <option>
                  16GB unified memory
                </option>
              </Form.Select>
            </div>
          </Col>

          <Col lg={6}>
            <div className="option-group">
              <label className="option-label">
                Storage
              </label>

              <Form.Select>
                <option>
                  1TB SSD Storage
                </option>
              </Form.Select>
            </div>
          </Col>
        </Row>
      </div>

      {/* ACTIONS */}
      <div className="details-actions">
        {/* QUANTITY */}
        <div className="quantity-box">
          <button
            type="button"
            onClick={decreaseQty}
          >
            -
          </button>

          <span>
            {String(quantity).padStart(
              2,
              '0'
            )}
          </span>

          <button
            type="button"
            onClick={increaseQty}
          >
            +
          </button>
        </div>

        {/* ADD TO CART */}
        <button
          type="button"
          className="add-cart-btn"
          onClick={handleAddToCart}
        >
          ADD TO CART <Cart3 />
        </button>

        {/* BUY NOW */}
        <button
          type="button"
          className="buy-btn"
          onClick={handleBuyNow}
        >
          BUY NOW
        </button>
      </div>

      {/* EXTRA */}
      <div className="extra-actions">
        <div
          onClick={() =>
            dispatch(
              addToWishlist(product)
            )
          }
        >
          <Heart />

          <span>
            Add to Wishlist
          </span>
        </div>

        <div>
          <ArrowRepeat />

          <span>
            Add to Compare
          </span>
        </div>
      </div>

      {/* SAFE CHECKOUT */}
      <div className="safe-checkout">
        <p>
          100% Guarantee Safe Checkout
        </p>

        <img
          src="https://i.imgur.com/6f8K0Qp.png"
          alt="payment"
        />
      </div>
    </div>
  )
}