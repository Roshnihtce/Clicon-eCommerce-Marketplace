import {
  Award,
  Truck,
  ArrowRepeat,
  Headset,
  CreditCard,
} from 'react-bootstrap-icons'

export default function ProductTabs() {
  return (
    <div className="product-tabs">
      {/* TAB HEADER */}

      <div className="tabs-header">
        <button className="active">
          DESCRIPTION
        </button>

        <button>
          ADDITIONAL INFORMATION
        </button>

        <button>
          SPECIFICATION
        </button>

        <button>REVIEW</button>
      </div>

      {/* CONTENT */}

      <div className="tabs-content">
        <div className="description-grid">
          
          {/* LEFT */}

          <div className="description-text">
            <h4>Description</h4>

            <p>
              The most powerful MacBook Pro
              ever is here. With the blazing-fast
              M1 Pro or M1 Max chip — the first
              Apple silicon designed for pros —
              you get groundbreaking performance
              and amazing battery life.
            </p>

            <p>
              Add to that a stunning Liquid
              Retina XDR display, the best
              camera and audio ever in a Mac
              notebook, and all the ports you
              need.
            </p>
          </div>

          {/* CENTER */}

          <div className="feature-list">
            <h4>Feature</h4>

            <ul>
              <li>
                <Award />
                Free 1 Year Warranty
              </li>

              <li>
                <Truck />
                Free Shipping & Fasted Delivery
              </li>

              <li>
                <ArrowRepeat />
                100% Money-back guarantee
              </li>

              <li>
                <Headset />
                24/7 Customer support
              </li>

              <li>
                <CreditCard />
                Secure payment method
              </li>
            </ul>
          </div>

          {/* RIGHT */}

          <div className="shipping-info">
            <h4>Shipping Information</h4>

            <ul>
              <li>
                <strong>Courier:</strong>
                2 - 4 days, free shipping
              </li>

              <li>
                <strong>Local Shipping:</strong>
                up to one week, $19.00
              </li>

              <li>
                <strong>UPS Ground Shipping:</strong>
                4 - 6 days, $29.00
              </li>

              <li>
                <strong>Unishop Global Export:</strong>
                3 - 4 days, $39.00
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}