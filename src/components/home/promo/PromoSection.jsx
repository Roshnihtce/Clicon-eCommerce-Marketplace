import { Container, Row, Col } from 'react-bootstrap'

import appleImage from '../../../assets/images/homepadmini.webp'

import xiaomiImage from '../../../assets/images/xiaomi-mi.webp'

export default function PromoSection() {
  return (
    <section className="promo-section">
      <Container>
        <Row>
          {/* LEFT BANNER */}

          <Col lg={6}>
            <div className="promo-banner apple-banner">
              <div className="promo-content">
                <span>INTRODUCING</span>

                <h2>
                  New Apple
                  <br />
                  Homepod Mini
                </h2>

                <p>
                  Jam-packed with innovation,
                  HomePod mini delivers
                  unexpectedly.
                </p>

                <button>
                  SHOP NOW →
                </button>
              </div>

              <div className="promo-image">
                <img
                  src={appleImage}
                  alt="apple"
                />
              </div>
            </div>
          </Col>

          {/* RIGHT BANNER */}

          <Col lg={6}>
            <div className="promo-banner xiaomi-banner">
              <div className="promo-content">
                <span>INTRODUCING NEW</span>

                <h2>
                  Xiaomi Mi 11 Ultra
                  <br />
                  12GB+256GB
                </h2>

                <p>
                  *Data provided by internal
                  laboratories. Industry
                  measurement.
                </p>

                <button>
                  SHOP NOW →
                </button>
              </div>

              <div className="promo-image">
                <img
                  src={xiaomiImage}
                  alt="xiaomi"
                />
              </div>

              <div className="price-badge">
                $590
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}