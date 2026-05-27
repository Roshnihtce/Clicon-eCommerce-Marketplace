import watchImage from '../../../assets/images/watch.webp'

export default function SidebarPromo() {
  return (
    <div className="sidebar-promo">
      <img
        src={watchImage}
        alt="watch"
      />

      <h5>WATCH</h5>

      <span>SERIES 7</span>

      <h3>
        Heavy on Features.
        <br />
        Light on Price.
      </h3>

      <div className="promo-price">
        Only for:
        <strong>$299 USD</strong>
      </div>

      <button className="add-cart-btn">
        ADD TO CART
      </button>

      <button className="details-btn">
        VIEW DETAILS →
      </button>
    </div>
  )
}