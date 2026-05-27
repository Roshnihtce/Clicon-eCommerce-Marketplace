import earbudsImage from '../../../assets/images/EarBuds.webp'

export default function ShowcaseSidebar() {
  return (
    <div className="showcase-sidebar">
      {/* TOP CARD */}

      <div className="sidebar-card promo-card">
        <img
          src={earbudsImage}
          alt="earbuds"
        />

        <h3>
          Xiaomi True
          <br />
          Wireless Earbuds
        </h3>

        <p>
          Escape the noise, It’s time to hear
          the magic with Xiaomi Earbuds.
        </p>

        <div className="price-box">
          Only for:
          <strong>$299 USD</strong>
        </div>

        <button>SHOP NOW →</button>
      </div>

      {/* BOTTOM CARD */}

      <div className="sidebar-card discount-card">
        <span>SUMMER SALES</span>

        <h2>
          37% DISCOUNT
        </h2>

        <p>
          only for
          <strong> SmartPhone </strong>
          product.
        </p>

        <button>SHOP NOW →</button>
      </div>
    </div>
  )
}