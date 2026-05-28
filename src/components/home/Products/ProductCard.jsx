import {
  Heart,
  Eye,
  Cart3,
  StarFill,
  Shuffle,
} from 'react-bootstrap-icons'

import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { addToCart } from '../../../store/slices/cartSlice'
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../store/slices/wishlistSlice'

import { toggleCompare } from '../../../store/slices/compareSlice'

export default function ProductCard({ product, featured }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const wishlistItems = useSelector((state) => state.wishlist.wishlistItems)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const compareItems = useSelector((state) => state.compare.items)

  const isWishlisted = wishlistItems.some((item) => item.id === product.id)
  const isInCart = cartItems.some((item) => item.id === product.id)
  const isCompared = compareItems.some((item) => item.id === product.id)

  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  const handleWishlist = (e) => {
    e.stopPropagation()

    if (isWishlisted) {
      dispatch(removeFromWishlist(product.id))
      alert('Already added in Wishlist ❤️')
    } else {
      dispatch(addToWishlist(product))
      alert('Added to Wishlist ❤️')
    }
  }

  const handleCart = (e) => {
    e.stopPropagation()

    if (isInCart) {
      alert('Already added in Cart 🛒')
    } else {
      dispatch(addToCart(product))
      alert('Added to Cart 🛒')
    }
  }

  const handleCompare = (e) => {
    e.stopPropagation()

    if (!isCompared && compareItems.length >= 3) {
      alert('Only 3 products can be compared ⚠️')
      return
    }

    dispatch(toggleCompare(product))

    if (isCompared) {
      alert('Removed from Compare ❌')
    } else {
      alert('Added to Compare ⚖️')
    }
  }

  return (
    <>
      <div
        className={`product-card ${featured ? 'featured-card' : ''}`}
        onClick={handleCardClick}
      >
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-content">
          {featured && (
            <div className="rating">
              {[1, 2, 3, 4, 5].map((i) => (
                <StarFill key={i} />
              ))}
              <span>({product.rating})</span>
            </div>
          )}

          <Link to={`/product/${product.id}`} onClick={(e) => e.stopPropagation()}>
            <h6>{product.title}</h6>
          </Link>

          <div className="product-price">
            {product.oldPrice && (
              <span className="old-price">{product.oldPrice}</span>
            )}
            <span className="new-price">{product.price}</span>
          </div>
        </div>

        <div className={featured ? 'featured-actions' : 'product-hover-actions'}>
          <button onClick={handleWishlist}>
            <Heart color={isWishlisted ? 'red' : 'black'} />
          </button>

          <button onClick={handleCart}>
            <Cart3 color={isInCart ? 'green' : 'black'} />
          </button>

          <button onClick={handleCompare}>
            <Shuffle color={isCompared ? 'blue' : 'black'} />
            {/* {isCompared ? 'ADDED' : 'COMPARE'} */}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              navigate(`/product/${product.id}`)
            }}
          >
            <Eye />
          </button>
        </div>
      </div>

      {/* FLOATING COMPARE BAR (NO STYLE USED) */}
      {compareItems.length > 0 && (
        <div className="compare-bar">
          <span>{compareItems.length} items selected</span>

          <button onClick={() => navigate('/compare')}>
            Compare Now
          </button>
        </div>
      )}
    </>
  )
}