import { Container, Row, Col } from 'react-bootstrap'

import featuredProducts from '../../../data/featuredProducts'

import ProductCard from '../Products/ProductCard'

import FeaturedBanner from './FeaturedBanner'

import FeaturedHeader from './FeaturedHeader'

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <Container>
        <Row>
          <Col lg={3}>
            <FeaturedBanner />
          </Col>

          <Col lg={9}>
            <FeaturedHeader />

            <Row className="g-3">
              {featuredProducts.map((product) => (
                <Col
                  lg={3}
                  md={6}
                  key={product.id}
                >
                  <ProductCard
                    product={product}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}