import { Container, Row, Col } from 'react-bootstrap'

import { useParams } from 'react-router-dom'

import shopProducts from '../../../data/shopProducts'

import ProductGallery from './ProductGallery'

import ProductInfo from './ProductInfo'

import ProductTabs from './ProductTabs'
import RelatedProducts from './RelatedProducts'

export default function ProductDetails() {
  const { id } = useParams()

  const product = shopProducts.find(
    (item) => item.id === Number(id)
  )

  return (
    <section className="product-details-page">
      <Container>
        <Row className="g-5">
          {/* LEFT */}

          <Col lg={6}>
            <ProductGallery
              product={product}
            />
          </Col>

          {/* RIGHT */}

          <Col lg={6}>
            <ProductInfo
              product={product}
            />
          </Col>
        </Row>

        {/* BOTTOM */}

        <ProductTabs
          product={product}
        />

        <RelatedProducts/>
      </Container>
    </section>
  )
}