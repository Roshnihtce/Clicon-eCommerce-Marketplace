import { Container, Row, Col } from 'react-bootstrap'

import accessoriesProducts from '../../../data/accessoriesProducts'

import ProductCard from '../Products/ProductCard'

import ShowcaseHeader from './ShowcaseHeader'

import ShowcaseSidebar from './ShowcaseSidebar'

export default function CategoryShowcase() {
  return (
    <section className="category-showcase">
      <Container>
        <Row className="g-3">
          {/* LEFT */}

          <Col lg={9}>
            <ShowcaseHeader />

            {/* PRODUCTS GRID */}

            <Row className="gx-0 gy-0">
              {accessoriesProducts.map(
                (product) => (
                  <Col
                    lg={3}
                    md={6}
                    sm={6}
                    key={product.id}
                    className="d-flex"
                  >
                    <ProductCard
                      product={product}
                    />
                  </Col>
                )
              )}
            </Row>
          </Col>

          {/* RIGHT */}

          <Col lg={3} className='d-flex'>
            <ShowcaseSidebar />
          </Col>
        </Row>
      </Container>
    </section>
  )
}