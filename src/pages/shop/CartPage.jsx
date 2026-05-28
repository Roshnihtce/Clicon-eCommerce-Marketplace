import { useSelector, useDispatch } from 'react-redux'
import { Cart3, Trash } from 'react-bootstrap-icons'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../layout/MainLayout'

import {
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
} from '../../store/slices/cartSlice'

export default function CartPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    )

    // ✅ SAFE PRICE PARSER (FIX NaN ISSUE)
    const getPrice = (price) => {
        return Number(
            String(price).replace(/[^0-9.]/g, '')
        ) || 0
    }

    // ✅ TOTAL PRICE FIXED
    const totalPrice = cartItems.reduce(
        (acc, item) => {
            const price = getPrice(item.price)
            return acc + price * item.quantity
        },
        0
    )

    return (
        <MainLayout>
            <Container className="py-4">

                <h3 className="mb-4">
                    <Cart3 /> Cart Page
                </h3>

                {cartItems.length === 0 ? (
                    <div className="text-center py-5">
                        <Cart3 size={40} className="mb-3" />
                        <h5>Your cart is empty</h5>
                        <p className="text-muted">
                            Add products to continue shopping
                        </p>
                    </div>
                ) : (
                    <>
                        {/* CART ITEMS */}
                        {cartItems.map((item) => {
                            const price = getPrice(item.price)

                            return (
                                <Card key={item.id} className="mb-3">
                                    <Card.Body>
                                        <Row className="align-items-center">

                                            {/* IMAGE */}
                                            <Col md={2}>
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className="img-fluid"
                                                />
                                            </Col>

                                            {/* INFO */}
                                            <Col md={4}>
                                                <h5>{item.title}</h5>
                                                <p className="mb-0">
                                                    ${price}
                                                </p>
                                            </Col>

                                            {/* QTY */}
                                            <Col md={3}>
                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    onClick={() =>
                                                        dispatch(
                                                            decreaseQty(item.id)
                                                        )
                                                    }
                                                >
                                                    -
                                                </Button>

                                                <span className="mx-2">
                                                    {item.quantity}
                                                </span>

                                                <Button
                                                    size="sm"
                                                    variant="secondary"
                                                    onClick={() =>
                                                        dispatch(
                                                            increaseQty(item.id)
                                                        )
                                                    }
                                                >
                                                    +
                                                </Button>
                                            </Col>

                                            {/* TOTAL */}
                                            <Col md={2}>
                                                ${price * item.quantity}
                                            </Col>

                                            {/* REMOVE */}
                                            <Col md={1}>
                                                <Button
                                                    variant="danger"
                                                    size="sm"
                                                    onClick={() =>
                                                        dispatch(
                                                            removeFromCart(item.id)
                                                        )
                                                    }
                                                >
                                                    <Trash />
                                                </Button>
                                            </Col>

                                        </Row>
                                    </Card.Body>
                                </Card>
                            )
                        })}

                        {/* SUMMARY */}
                        <Card className="mt-4">
                            <Card.Body className="d-flex justify-content-between align-items-center">

                                <Button
                                    variant="danger"
                                    onClick={() =>
                                        dispatch(clearCart())
                                    }
                                >
                                    Clear Cart
                                </Button>

                                <h5>
                                    Total: ${totalPrice}
                                </h5>

                                <Button
                                    variant="success"
                                    onClick={() => navigate('/checkout')}
                                >
                                    Proceed to Checkout
                                </Button>
                            </Card.Body>
                        </Card>

                    </>
                )}

            </Container>
        </MainLayout>
    )
}


// import { useSelector } from 'react-redux'
// import { Cart3 } from 'react-bootstrap-icons'
// import { Container, Row, Col, Card } from 'react-bootstrap'

// import MainLayout from '../../layout/MainLayout'

// export default function CartPage() {
//     const cartItems = useSelector(
//         (state) => {
//             console.log('CART STATE', state.cart)
//             return state.cart.cartItems
//         }
//         // (state) => state.cart.cartItems
//     )

//     return (
//         <MainLayout>
//             <Container className="py-4">
//                 <h3 className="mb-4">
//                     <Cart3 /> Cart Page
//                 </h3>

//                 {cartItems.length === 0 ? (
//                     <div className="text-center py-5">
//                         <Cart3 size={40} className="mb-3" />
//                         <h5>Your cart is empty</h5>
//                         <p className="text-muted">
//                             Add some products to see them here
//                         </p>
//                     </div>
//                 ) : (
//                     cartItems.map((item) => (
//                         <Card key={item.id} className="mb-3">
//                             <Card.Body>
//                                 <Row className="align-items-center">

//                                     <Col md={2}>
//                                         <img
//                                             src={item.image}
//                                             alt={item.title}
//                                             className="img-fluid"
//                                         />
//                                     </Col>

//                                     <Col md={7}>
//                                         <h5>{item.title}</h5>
//                                         <p className="mb-1 text-muted">
//                                             Price: {item.price}
//                                         </p>
//                                     </Col>

//                                     <Col md={3}>
//                                         <p className="mb-0">
//                                             Qty: {item.quantity}
//                                         </p>
//                                     </Col>

//                                 </Row>
//                             </Card.Body>
//                         </Card>
//                     ))
//                 )}
//             </Container>
//         </MainLayout>
//     )
// }