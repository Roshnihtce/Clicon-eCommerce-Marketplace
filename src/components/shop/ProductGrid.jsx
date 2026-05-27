import { Row, Col } from 'react-bootstrap'


import ProductCard from '../Home/Products/ProductCard'
import shopProducts from '../../data/shopProducts'

export default function ProductGrid() {
  return (
    <Row className="g-0">
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