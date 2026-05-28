import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import shopProducts from '../../data/shopProducts'
import ProductCard from '../../components/home/Products/ProductCard'

// Convert "$1,200" → 1200 safely
const getPriceNumber = (price) => {
  if (!price) return 0
  const num = price.toString().replace(/[$,]/g, '')
  return Number(num) || 0
}

// normalize text for safe compare
const normalize = (str) =>
  (str || '').toString().trim().toLowerCase()

export default function ProductGrid() {
  const filters = useSelector((state) => state.filters)

  const filteredProducts = shopProducts.filter((product) => {
    const productTitle = normalize(product.title)
    const productCategory = normalize(product.category)
    const productBrand = normalize(product.brand)

    // ---------------- SEARCH ----------------
    const search = normalize(filters.search)
    const matchSearch =
      !search || productTitle.includes(search)

    // ---------------- CATEGORY ----------------
    const category = normalize(filters.category)
    const matchCategory =
      !category ||
      category === 'all' ||
      productCategory === category

    // ---------------- PRICE ----------------
    const price = getPriceNumber(product.price)

    const min = Number(filters.price?.min ?? 0)
    const max = Number(filters.price?.max ?? 999999999)

    const matchPrice = price >= min && price <= max

    // ---------------- BRAND ----------------
    const matchBrand =
      !filters.brand?.length ||
      filters.brand.map(normalize).includes(productBrand)

    // ---------------- TAG ----------------
    const matchTag =
      !filters.tag ||
      (product.tags &&
        product.tags.map(normalize).includes(normalize(filters.tag)))

    return (
      matchSearch &&
      matchCategory &&
      matchPrice &&
      matchBrand &&
      matchTag
    )
  })

  return (
    <Row className="g-3">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <Col
            key={product.id}
            xxl={3}
            xl={3}
            lg={4}
            md={6}
            sm={6}
            xs={12}
          >
            <ProductCard product={product} />
          </Col>
        ))
      ) : (
        <Col xs={12} className="text-center py-5">
          <h5 className="text-muted">
            No products found 😞
          </h5>
        </Col>
      )}
    </Row>
  )
}