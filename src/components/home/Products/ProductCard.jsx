import {
  Heart,
  Eye,
  Cart3,
  StarFill,
} from 'react-bootstrap-icons'

export default function ProductCard({
  product,
  featured,
}) {
  return (
    <div
      className={`product-card ${
        featured ? 'featured-card' : ''
      }`}
    >
      {product.discount && (
        <div className="product-badge">
          {product.discount}
        </div>
      )}

      <div className="product-image">
        <img
          src={product.image}
          alt={product.title}
        />
      </div>

      <div className="product-content">
        {featured && (
          <div className="rating">
            {[1, 2, 3, 4, 5].map((item) => (
              <StarFill key={item} />
            ))}

            <span>{product.rating}</span>
          </div>
        )}

        <h6>{product.title}</h6>

        <div className="product-price">
          {product.oldPrice && (
            <span className="old-price">
              {product.oldPrice}
            </span>
          )}

          <span className="new-price">
            {product.price}
          </span>
        </div>

        {featured && (
          <p className="product-description">
            {product.description}
          </p>
        )}
      </div>

      {featured ? (
        <div className="featured-actions">
          <button>
            <Heart />
          </button>

          <button className="cart-btn">
            <Cart3 />
            ADD TO CARD
          </button>

          <button>
            <Eye />
          </button>
        </div>
      ) : (
        <div className="product-hover-actions">
          <button>
            <Heart />
          </button>

          <button>
            <Cart3 />
          </button>

          <button>
            <Eye />
          </button>
        </div>
      )}
    </div>
  )
}