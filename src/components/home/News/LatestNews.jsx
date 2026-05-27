import { Container, Row, Col } from 'react-bootstrap'

import latestNews from '../../../data/latestNews'

import LatestNewsCard from './LatestNewsCard'

export default function LatestNews() {
  return (
    <section className="latest-news">
      <Container>
        <div className="section-title">
          <h2>Latest News</h2>
        </div>

        <Row>
          {latestNews.map((news) => (
            <Col
              lg={4}
              md={6}
              key={news.id}
            >
              <LatestNewsCard news={news} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}