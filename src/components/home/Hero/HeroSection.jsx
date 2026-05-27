import { Container, Row, Col } from 'react-bootstrap'

// import CategorySidebar from './CategorySidebar'

import MainBanner from './MainBanner'

import SideBanner from './SideBanner'

export default function HeroSection() {
  return (
    <section className="hero-section">
      <Container>
        <Row>
          {/* <Col lg={3}>
            <CategorySidebar />
          </Col> */}

          <Col lg={9}>
            <MainBanner />
          </Col>

          <Col lg={3}>
            <SideBanner />
          </Col>
        </Row>
      </Container>
    </section>
  )
}