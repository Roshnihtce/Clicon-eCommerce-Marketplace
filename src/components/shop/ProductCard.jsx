import {
  Heart,
  Eye,
  Cart3,
  StarFill,
} from 'react-bootstrap-icons'

import { Link } from 'react-router-dom'

import { useDispatch } from 'react-redux'

import {
  addToCart,
} from '../../store/slices/cartSlice'

import {
  addToWishlist,
} from '../../store/slices/wishlistSlice'

export default function ProductCard({
  product,
}) {
  const dispatch = useDispatch()

  return (
    <div className="shop-product-card">
      {/* BADGE */}

      {product.discount && (
        <div className="shop-product-badge">
          {product.discount}
        </div>
      )}

      {/* IMAGE */}

      <div className="shop-product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      {/* HOVER ACTIONS */}

      <div className="shop-product-actions">
        {/* WISHLIST */}

        <button
          onClick={() =>
            dispatch(
              addToWishlist(product)
            )
          }
        >
          <Heart />
        </button>

        {/* CART */}

        <button
          onClick={() =>
            dispatch(addToCart(product))
          }
        >
          <Cart3 />
        </button>

        {/* DETAILS */}

        <Link
          to={`/product/${product.id}`}
          className="action-btn"
        >
          <Eye />
        </Link>
      </div>

      {/* CONTENT */}

      <div className="shop-product-content">
        {/* RATING */}

        <div className="shop-product-rating">
          {[1, 2, 3, 4, 5].map((item) => (
            <StarFill key={item} />
          ))}

          <span>
            ({product.rating})
          </span>
        </div>

        {/* TITLE */}

        <Link
          to={`/product/${product.id}`}
          className="product-title"
        >
          <h6>{product.title}</h6>
        </Link>

        {/* PRICE */}

        <div className="shop-product-price">
          {product.oldPrice && (
            <span className="old-price">
              {product.oldPrice}
            </span>
          )}

          <span className="new-price">
            {product.price}
          </span>
        </div>
      </div>
    </div>
  )
}