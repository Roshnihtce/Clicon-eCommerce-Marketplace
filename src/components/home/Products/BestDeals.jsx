import { Container, Row, Col } from 'react-bootstrap'

import bestDeals from '../../../data/bestDeals'

import ProductCard from './ProductCard'

export default function BestDeals() {
  const featuredProduct =
    bestDeals.find(
      (item) => item.featured
    )

  const normalProducts =
    bestDeals.filter(
      (item) => !item.featured
    )

  return (
    <section className="best-deals">
      <Container>
        {/* HEADER */}

        <div className="section-header">
          <div className="left">
            <h2>Best Deals</h2>

            <span className="countdown">
              Deals ends in

              <strong>
                16d : 21h : 57m : 23s
              </strong>
            </span>
          </div>

          <button>
            Browse All Product
          </button>
        </div>

        {/* PRODUCTS */}

        <Row className="g-0">
          {/* FEATURED PRODUCT */}

          <Col lg={3}>
            <ProductCard
              product={featuredProduct}
              featured={true}
            />
          </Col>

          {/* NORMAL PRODUCTS */}

          <Col lg={9}>
            <Row className="g-0">
              {normalProducts.map(
                (product) => (
                  <Col
                    lg={3}
                    md={4}
                    sm={6}
                    key={product.id}
                  >
                    <ProductCard
                      product={product}
                    />
                  </Col>
                )
              )}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}