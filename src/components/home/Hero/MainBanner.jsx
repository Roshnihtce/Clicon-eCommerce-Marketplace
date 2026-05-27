import { Container, Row, Col } from 'react-bootstrap'

import {
  ArrowRight,
} from 'react-bootstrap-icons'

import bannerImage from '../../../assets/images/xbox.webp'

export default function MainBanner() {
  return (
    <section className="">
      <Container>
        <div
          className="rounded-4 overflow-hidden"
          style={{
            background: '#F2F4F5',
            padding: '72px',
          }}
        >
          <Row className="align-items-center">
            {/* LEFT CONTENT */}

            <Col lg={6}>
              <div>
                {/* SUBTITLE */}

                <div className="d-flex align-items-center gap-3 mb-4">
                  <span
                    style={{
                      width: '32px',
                      height: '2px',
                      background: '#2DA5F3',
                    }}
                  ></span>

                  <span
                    className="fw-semibold"
                    style={{
                      color: '#2DA5F3',
                      fontSize: '16px',
                    }}
                  >
                    THE BEST PLACE TO PLAY
                  </span>
                </div>

                {/* TITLE */}

                <h1
                  className="fw-bold mb-4"
                  style={{
                    fontSize: '50px',
                    lineHeight: '60px',
                    color: '#191C1F',
                  }}
                >
                  Xbox Consoles
                </h1>

                {/* DESCRIPTION */}

                <p
                  className="mb-5"
                  style={{
                    fontSize: '18px',
                    lineHeight: '24px',
                    color: '#5F6C72',
                  }}
                >
                  Save up to 50% on select Xbox
                  games.

                  <span className="d-block">
                    Get 3 months of PC Game
                    Pass for $2 USD.
                  </span>
                </p>

                {/* BUTTON */}

                <button
                  className="border-0 text-white fw-bold d-flex align-items-center justify-content-center gap-2"
                  style={{
                    width: '190px',
                    height: '56px',
                    background: '#FA8232',
                  }}
                >
                  SHOP NOW

                  <ArrowRight />
                </button>

                {/* DOTS */}

                <div className="d-flex align-items-center gap-3 mt-5 pt-4">
                  <span
                    style={{
                      width: '18px',
                      height: '18px',
                      borderRadius: '50%',
                      background: '#191C1F',
                    }}
                  ></span>

                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#ADB7BC',
                    }}
                  ></span>

                  <span
                    style={{
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: '#ADB7BC',
                    }}
                  ></span>
                </div>
              </div>
            </Col>

            {/* RIGHT IMAGE */}

            <Col lg={6}>
              <div className="position-relative text-center">
                <img
                  src={bannerImage}
                  alt="xbox"
                  className="img-fluid"
                  style={{
                    maxWidth: '420px',
                  }}
                />

                {/* PRICE */}

                <div
                  className="position-absolute rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: '#2DA5F3',
                    border: '6px solid #fff',
                    top: '20px',
                    right: '20px',
                    fontSize: '36px',
                  }}
                >
                  $299
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}