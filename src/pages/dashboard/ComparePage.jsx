import { useSelector, useDispatch } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { clearCompare } from '../../store/slices/compareSlice'
import MainLayout from '../../layout/MainLayout'

export default function ComparePage() {
    const compareItems = useSelector((state) => state.compare.items)
    const dispatch = useDispatch()

    if (compareItems.length === 0) {
        return (
            <MainLayout>

                <Container className="py-4 text-center">
                    <h4>No products selected for comparison</h4>
                </Container>
            </MainLayout>
        )
    }

    return (
        <MainLayout>
            <Container className="py-4">
                <h3 className="mb-4">Compare Products</h3>

                <Row className="g-3">
                    {compareItems.map((product) => (
                        <Col md={6} key={product.id}>
                            <Card className="p-3 shadow-sm">
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ height: 200, objectFit: 'contain' }}
                                />
                                <h5 className="mt-3">{product.title}</h5>
                                <p><b>Price:</b> {product.price}</p>
                                <p><b>Brand:</b> {product.brand}</p>
                                <p><b>Category:</b> {product.category}</p>
                                <p><b>Rating:</b> {product.rating}</p>
                            </Card>
                        </Col>
                    ))}
                </Row>

                <div className="mt-4">
                    <Button variant="danger" onClick={() => dispatch(clearCompare())}>
                        Clear Compare
                    </Button>
                </div>
            </Container>
        </MainLayout>
    )
}