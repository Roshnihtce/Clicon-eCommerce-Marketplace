import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import phoneIcon from './../../../assets/logo&icons/PhoneCall.svg'

import {
  Headset,
  InfoCircle,
  ArrowRepeat,
  GeoAlt,
  HouseDoorFill,
} from 'react-bootstrap-icons'

export default function NavBar() {
  return (
    <div className="navbar-section">
      <Container>
        <Row className="align-items-center">

          {/* LEFT LINKS */}
          <Col lg={8}>
            <div className="nav-links">

              <Link to="/shop" className="category-btn">
                All Category
              </Link>

              <Link to="/track-orders">
                <GeoAlt />
                Track Order
              </Link>


              <Link to="/compare">
                <ArrowRepeat />
                Compare
              </Link>

              <a href="#">
                <Headset />
                Customer Support
              </a>

              <a href="#">
                <InfoCircle />
                Need Help
              </a>

            </div>
          </Col>

          {/* RIGHT CONTACT */}
          <Col lg={4}>
            <div className="contact-number">
              <img src={phoneIcon} alt="phone" />
              <a href="tel:+12025550104">+1-202-555-0104</a>
            </div>
          </Col>

        </Row>
      </Container>
    </div>
  )
}
