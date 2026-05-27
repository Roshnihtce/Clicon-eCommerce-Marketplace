import bannerImage from '../../../assets/images/discountimage.webp'

export default function FeaturedBanner() {
  return (
    <div className="featured-banner">
      <span>COMPUTER & ACCESSORIES</span>

      <h2>32% Discount</h2>

      <p>For all electronics products</p>

      <div className="offer">
        Offers ends in:
        <strong>ENDS OF CHRISTMAS</strong>
      </div>

      <button>SHOP NOW →</button>

      <div className="banner-image">
        <img
          src={bannerImage}
          alt="banner"
        />
      </div>
    </div>
  )
}