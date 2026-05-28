import { Container } from 'react-bootstrap'

import bannerImage from '../../../assets/images/macbook.webp'

import { ArrowRight } from 'react-bootstrap-icons'

export default function MacbookBanner() {
  return (
    <section className="macbook-banner">
      <Container>
        <div className="banner-wrapper">
          {/* LEFT CONTENT */}

          <div className="banner-content">
            <span className="offer-badge">
              SAVE UP TO $200.00
            </span>

            <h2>Macbook Pro</h2>

            <p>
              Apple M1 Max Chip.
              32GB Unified <span className="d-block"> Memory,
              1TB SSD Storage</span>
            </p>

            <button>
              SHOP NOW

              <ArrowRight />
            </button>
          </div>

          {/* RIGHT IMAGE */}

          <div className="banner-image">
            <div className="price-badge">
              $1999
            </div>

            <img
              src={bannerImage}
              alt="Macbook"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}