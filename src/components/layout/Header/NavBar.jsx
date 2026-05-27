import { Container, Row, Col } from 'react-bootstrap'
import phoneIcon from './../../../assets/logo&icons/PhoneCall.svg'
import {
  Headset,
  InfoCircle,
  ArrowRepeat,
  GeoAlt,
  // TelephoneOutbound,
} from 'react-bootstrap-icons'

export default function NavBar() {
  return (
    <div className="navbar-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={8}>
            <div className="nav-links">
              <button className="category-btn">
                All Category
              </button>

              <a href="#">
                <GeoAlt />
                Track Order
              </a>

              <a href="#">
                <ArrowRepeat />
                Compare
              </a>

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

          <Col lg={4}>
            <div className="contact-number">
              <img
                src={phoneIcon}
                alt="phone"
              />

              <span>+1-202-555-0104</span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}