import { Container, Row, Col } from 'react-bootstrap'

import topProducts from '../../../data/topProducts'

export default function TopProducts() {
  return (
    <section className="top-products">
      <Container>
        <Row className="g-4">
          {topProducts.map((section) => (
            <Col lg={3} md={6} key={section.id}>
              <div className="products-column">
                <h3>{section.title}</h3>

                <div className="column-products">
                  {section.items.map((item) => (
                    <div
                      className="mini-product-card"
                      key={item.id}
                    >
                      <div className="product-image">
                        <img
                          src={item.image}
                          alt={item.title}
                        />
                      </div>

                      <div className="product-content">
                        <h6>{item.title}</h6>

                        <span>{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}