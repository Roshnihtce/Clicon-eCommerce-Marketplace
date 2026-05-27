import { Container, Row, Col } from 'react-bootstrap'

import ShopSidebar from './ShopSidebar'

import ShopProducts from './ShopProducts'

export default function ShopPage() {
  return (
    <section className="shop-page">
      <Container>
        <Row>
          {/* SIDEBAR */}

          <Col
            xxl={3}
            xl={3}
            lg={3}
          >
            <ShopSidebar />
          </Col>

          {/* PRODUCTS */}

          <Col
            xxl={9}
            xl={9}
            lg={9}
          >
            <ShopProducts />
          </Col>
        </Row>
      </Container>
    </section>
  )
}