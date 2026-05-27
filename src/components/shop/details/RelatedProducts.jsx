import { Row, Col } from 'react-bootstrap'

import relatedProducts from '../../../data/relatedProducts'

export default function RelatedProducts() {
  return (
    <div className="related-products">
      <Row className="g-4">
        
        {/* RELATED PRODUCT */}

        <Col lg={3}>
          <div className="related-column">
            <h4>RELATED PRODUCT</h4>

            {relatedProducts.related.map(
              (product) => (
                <div
                  className="related-card"
                  key={product.id}
                >
                  <div className="related-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div className="related-content">
                    <h5>
                      {product.title}
                    </h5>

                    <span>
                      {product.price}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Col>

        {/* PRODUCT ACCESSORIES */}

        <Col lg={3}>
          <div className="related-column">
            <h4>PRODUCT ACCESSORIES</h4>

            {relatedProducts.accessories.map(
              (product) => (
                <div
                  className="related-card"
                  key={product.id}
                >
                  <div className="related-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div className="related-content">
                    <h5>
                      {product.title}
                    </h5>

                    <span>
                      {product.price}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Col>

        {/* APPLE PRODUCT */}

        <Col lg={3}>
          <div className="related-column">
            <h4>APPLE PRODUCT</h4>

            {relatedProducts.apple.map(
              (product) => (
                <div
                  className="related-card"
                  key={product.id}
                >
                  <div className="related-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div className="related-content">
                    <h5>
                      {product.title}
                    </h5>

                    <span>
                      {product.price}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Col>

        {/* FEATURED PRODUCTS */}

        <Col lg={3}>
          <div className="related-column">
            <h4>FEATURED PRODUCTS</h4>

            {relatedProducts.featured.map(
              (product) => (
                <div
                  className="related-card"
                  key={product.id}
                >
                  <div className="related-image">
                    <img
                      src={product.image}
                      alt={product.title}
                    />
                  </div>

                  <div className="related-content">
                    <h5>
                      {product.title}
                    </h5>

                    <span>
                      {product.price}
                    </span>
                  </div>
                </div>
              )
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}