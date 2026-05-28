import { useState } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import {
  useParams,
  useNavigate,
} from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { addToCart } from '../../../store/slices/cartSlice'

import shopProducts from '../../../data/shopProducts'

import ProductGallery from './ProductGallery'

import ProductInfo from './ProductInfo'

import ProductTabs from './ProductTabs'

import RelatedProducts from './RelatedProducts'

export default function ProductDetails() {
  const { id } = useParams()

  const navigate = useNavigate()

  const dispatch = useDispatch()

  const [quantity, setQuantity] =
    useState(1)

  const product = shopProducts.find(
    (item) => item.id === Number(id)
  )

  const increaseQty = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1)
    }
  }

  const handleAddToCart = () => {
    alert('Add To Cart Clicked')

    for (
      let i = 0;
      i < quantity;
      i++
    ) {
      dispatch(addToCart(product))
    }

    alert('Product Added To Cart Successfully')
  }

  const handleBuyNow = () => {

    const buyNowItem = {
      ...product,
      quantity,
    }

    localStorage.setItem(
      'buyNowItem',
      JSON.stringify([buyNowItem])
    )


    navigate('/checkout')

  }

  return (
    <section className="product-details-page">
      <Container>
        <Row className="g-5">
          <Col lg={6}>
            <ProductGallery
              product={product}
            />
          </Col>

          <Col lg={6}>
            <ProductInfo
              product={product}
              quantity={quantity}
              increaseQty={
                increaseQty
              }
              decreaseQty={
                decreaseQty
              }
              handleAddToCart={
                handleAddToCart
              }
              handleBuyNow={
                handleBuyNow
              }
            />
          </Col>
        </Row>

        <ProductTabs
          product={product}
        />

        <RelatedProducts />
      </Container>
    </section>
  )
}