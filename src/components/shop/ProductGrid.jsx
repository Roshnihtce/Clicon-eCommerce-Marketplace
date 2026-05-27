import { Row, Col } from 'react-bootstrap'

import shopProducts from '../../data/shopProducts'

import ProductCard from './ProductCard'

export default function ProductGrid() {
  return (
    <Row className="g-3">
      {shopProducts.map((product) => (
        <Col
          key={product.id}
          xxl={3}
          xl={3}
          lg={4}
          md={6}
          sm={6}
          xs={12}
        >
          <ProductCard
            product={product}
          />
        </Col>
      ))}
    </Row>
  )
}