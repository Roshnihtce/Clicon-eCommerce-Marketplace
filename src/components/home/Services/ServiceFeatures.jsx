import { Container, Row, Col } from 'react-bootstrap'

import {
  Truck,
  Trophy,
  CreditCard,
  Headset,
} from 'react-bootstrap-icons'

const features = [
  {
    icon: <Truck />,
    title: 'FASTED DELIVERY',
    desc: 'Delivery in 24H',
  },

  {
    icon: <Trophy />,
    title: '24 HOURS RETURN',
    desc: '100% money-back guarantee',
  },

  {
    icon: <CreditCard />,
    title: 'SECURE PAYMENT',
    desc: 'Your money is safe',
  },

  {
    icon: <Headset />,
    title: 'SUPPORT 24/7',
    desc: 'Live contact/message',
  },
]

export default function ServiceFeatures() {
  return (
    <section className="service-features">
      <Container>
        <Row>
          {features.map((item, index) => (
            <Col lg={3} md={6} key={index}>
              <div className="feature-card">
                <div className="feature-icon">
                  {item.icon}
                </div>

                <div className="feature-content">
                  <h5>{item.title}</h5>

                  <p>{item.desc}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}