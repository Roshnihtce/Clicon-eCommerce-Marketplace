import { useEffect, useState } from 'react'
import {
  Container,
  Card,
  Badge,
  Row,
  Col,
  Button,
} from 'react-bootstrap'
import MainLayout from '../../layout/MainLayout'

// helper
const getPrice = (price) =>
  Number(String(price).replace(/[^0-9.]/g, '')) || 0

export default function TrackOrderPage() {
  const [orders, setOrders] = useState([])

  // load orders
  const loadOrders = () => {
    const data =
      JSON.parse(localStorage.getItem('orders')) || []
    setOrders(data)
  }

  useEffect(() => {
    loadOrders()
  }, [])

  return (
    <MainLayout>
      <Container className="py-4">
        <h3 className="mb-4">📦 My Orders</h3>

        {/* EMPTY STATE */}
        {orders.length === 0 ? (
          <Card className="p-4 text-center shadow-sm">
            <h5 className="text-muted">
              No orders found
            </h5>
            <Button
              className="mt-3"
              href="/shop"
              variant="primary"
            >
              Start Shopping
            </Button>
          </Card>
        ) : (
          orders.map((order) => (
            <Card
              key={order.id}
              className="mb-3 shadow-sm"
            >
              <Card.Body>
                {/* ORDER HEADER */}
                <div className="d-flex justify-content-between mb-3">
                  <h6>
                    Order ID: {order.id}
                  </h6>

                  <div className="d-flex gap-2 align-items-center">
                    <Badge bg="warning">
                      {order.status}
                    </Badge>

                    <small className="text-muted">
                      {new Date(
                        order.date
                      ).toLocaleString()}
                    </small>
                  </div>
                </div>

                {/* ITEMS */}
                {order.items.map((item) => {
                  const price = getPrice(item.price)
                  const subtotal =
                    price * item.quantity

                  return (
                    <Row
                      key={item.id}
                      className="align-items-center mb-2 border-bottom pb-2"
                    >
                      <Col md={2}>
                        <img
                          src={item.image}
                          alt=""
                          style={{
                            width: 50,
                            height: 50,
                            objectFit: 'cover',
                            borderRadius: 8,
                          }}
                        />
                      </Col>

                      <Col md={7}>
                        <strong>
                          {item.title}
                        </strong>
                        <div className="text-muted">
                          Qty: {item.quantity}
                        </div>
                      </Col>

                      <Col md={3} className="text-end">
                        ${subtotal}
                      </Col>
                    </Row>
                  )
                })}

                {/* TOTAL */}
                <hr />

                <div className="d-flex justify-content-between">
                  <h5>Total</h5>
                  <h5>${order.total}</h5>
                </div>

                <p className="mb-0 text-muted">
                  Payment:{' '}
                  {order.customer.payment}
                </p>

                <p className="mb-0 text-muted">
                  Name: {order.customer.name}
                </p>

                <Button
                  className="mt-3"
                  href="/shop"
                  variant="outline-primary"
                >
                  Back to Shop
                </Button>
              </Card.Body>
            </Card>
          ))
        )}
      </Container>
    </MainLayout>
  )
}