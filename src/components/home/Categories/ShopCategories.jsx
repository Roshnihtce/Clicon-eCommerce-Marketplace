import { Container, Row, Col } from 'react-bootstrap'

import {
  ArrowLeft,
  ArrowRight,
} from 'react-bootstrap-icons'

import categories from '../../../data/categories'

import CategoryCard from './CategoryCard'

export default function ShopCategories() {
  return (
    <section className="shop-categories">
      <Container>
        <div className="section-title">
          <h2>Shop with Categorys</h2>
        </div>

        <div className="categories-wrapper">
          <button className="slider-btn left">
            <ArrowLeft />
          </button>

          <Row className="flex-nowrap">
            {categories.map((item) => (
              <Col lg={2} md={4} xs={6} key={item.id}>
                <CategoryCard item={item} />
              </Col>
            ))}
          </Row>

          <button className="slider-btn right">
            <ArrowRight />
          </button>
        </div>
      </Container>
    </section>
  )
}