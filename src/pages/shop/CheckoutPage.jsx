import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Card,
  Button,
  Form,
  Row,
  Col,
  Badge,
} from 'react-bootstrap'
import MainLayout from '../../layout/MainLayout'
import { clearCart } from '../../store/slices/cartSlice'

export default function CheckoutPage() {
  const dispatch = useDispatch()

  const cartItems = useSelector(
    (state) => state.cart.cartItems
  )

  const getPrice = (price) =>
    Number(String(price).replace(/[^0-9.]/g, '')) || 0

  const total = cartItems.reduce(
    (acc, item) =>
      acc + getPrice(item.price) * item.quantity,
    0
  )

  const [step, setStep] = useState(1)

  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    payment: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  // ✅ SAVE ORDER TO LOCAL STORAGE
  const handlePayNow = () => {
    if (
      !form.name ||
      !form.phone ||
      !form.address ||
      !form.payment
    ) {
      alert('Please fill all details')
      return
    }

    const newOrder = {
      id: Date.now(),
      customer: form,
      items: cartItems,
      total,
      date: new Date().toISOString(),
      status: 'Processing',
    }

    // old orders get
    const oldOrders =
      JSON.parse(localStorage.getItem('orders')) || []

    // add new order
    const updatedOrders = [newOrder, ...oldOrders]

    // save
    localStorage.setItem(
      'orders',
      JSON.stringify(updatedOrders)
    )

    // clear cart
    dispatch(clearCart())

    setStep(2)
  }

  return (
    <MainLayout>
      <Container className="py-4">
        <h3 className="mb-4">Checkout</h3>

        <Row>
          {/* LEFT SIDE */}
          <Col md={7}>
            {step === 1 && (
              <Card className="p-3 shadow-sm">
                <h5 className="mb-3">
                  Delivery Details
                </h5>

                <Form>
                  <Form.Control
                    className="mb-2"
                    placeholder="Full Name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                  />

                  <Form.Control
                    className="mb-2"
                    placeholder="Phone Number"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                  />

                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="mb-3"
                    placeholder="Full Address"
                    name="address"
                    value={form.address}
                    onChange={handleChange}
                  />

                  <h6>Payment Method</h6>

                  <Form.Check
                    type="radio"
                    label="UPI (GPay / PhonePe)"
                    name="payment"
                    value="upi"
                    onChange={handleChange}
                  />

                  <Form.Check
                    type="radio"
                    label="Card"
                    name="payment"
                    value="card"
                    onChange={handleChange}
                  />

                  <Form.Check
                    type="radio"
                    label="Cash on Delivery"
                    name="payment"
                    value="cod"
                    onChange={handleChange}
                  />

                  <Button
                    className="mt-3 w-100"
                    variant="success"
                    onClick={handlePayNow}
                  >
                    Pay Now
                  </Button>
                </Form>
              </Card>
            )}

            {step === 2 && (
              <Card className="text-center p-4 shadow-sm">
                <h3>🎉 Order Successful</h3>

                <p>Name: {form.name}</p>
                <p>Payment: {form.payment}</p>

                <h5>Total Paid: ${total}</h5>

                <Button
                  className="mt-3"
                  onClick={() => setStep(2)}
                >
                  Back
                </Button>
              </Card>
            )}
          </Col>

          {/* RIGHT SIDE */}
          <Col md={5}>
            <Card className="p-3 shadow-sm">
              <h5 className="mb-3">
                Order Summary
              </h5>

              {cartItems.map((item) => {
                const price = getPrice(item.price)
                const subtotal =
                  price * item.quantity

                return (
                  <div
                    key={item.id}
                    className="d-flex justify-content-between mb-3 border-bottom pb-2"
                  >
                    <div>
                      <h6 className="mb-0">
                        {item.title}
                      </h6>
                      <small>
                        Qty: {item.quantity}
                      </small>
                    </div>

                    <Badge bg="dark">
                      ${subtotal}
                    </Badge>
                  </div>
                )
              })}

              <hr />

              <div className="d-flex justify-content-between">
                <h5>Total</h5>
                <h5>${total}</h5>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </MainLayout>
  )
}
