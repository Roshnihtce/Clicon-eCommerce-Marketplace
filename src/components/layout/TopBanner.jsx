import {
  ArrowRight,
  X,
} from 'react-bootstrap-icons'

export default function TopBanner() {
  return (
    <div className="top-banner">
      <div className="banner-left">
        <span className="black-tag">
          Black
        </span>

        <h5>Friday</h5>
      </div>

      <div className="banner-center">
        <span>Up to</span>

        <h2>59%</h2>

        <span>OFF</span>
      </div>

      <button className="shop-btn">
        SHOP NOW
        <ArrowRight />
      </button>

      <button className="close-btn">
        <X />
      </button>
    </div>
  )
}